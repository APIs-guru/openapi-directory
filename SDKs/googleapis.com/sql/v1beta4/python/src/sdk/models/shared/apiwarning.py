from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class APIWarningCodeEnum(str, Enum):
    SQL_API_WARNING_CODE_UNSPECIFIED = "SQL_API_WARNING_CODE_UNSPECIFIED"
    REGION_UNREACHABLE = "REGION_UNREACHABLE"
    MAX_RESULTS_EXCEEDS_LIMIT = "MAX_RESULTS_EXCEEDS_LIMIT"


@dataclass_json
@dataclass
class APIWarning:
    r"""APIWarning
    An Admin API warning message.
    """
    
    code: Optional[APIWarningCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    
