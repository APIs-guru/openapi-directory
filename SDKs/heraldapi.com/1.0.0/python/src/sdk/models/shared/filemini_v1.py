from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FileMiniV1StatusEnum(str, Enum):
    AVAILABLE = "available"
    DELETED = "deleted"

class FileMiniV1TypeEnum(str, Enum):
    QUOTE_SUMMARY = "quote_summary"
    POLICY_SPECIMEN = "policy_specimen"
    CYBER_RISK_ASSEMENT = "cyber_risk_assement"
    APPLICATION_SUMMARY = "application_summary"


@dataclass_json
@dataclass
class FileMiniV1:
    r"""FileMiniV1
    A mini representation of a file, used when nested within another response.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[FileMiniV1StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: Optional[FileMiniV1TypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
