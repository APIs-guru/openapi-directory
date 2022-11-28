from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DataLeakPreventionChangeTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    FLAGGED = "FLAGGED"
    CLEARED = "CLEARED"


@dataclass_json
@dataclass
class DataLeakPreventionChange:
    r"""DataLeakPreventionChange
    A change in the object's data leak prevention status.
    """
    
    type: Optional[DataLeakPreventionChangeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
