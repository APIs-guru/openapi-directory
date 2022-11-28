from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class StatusCodeEnum(str, Enum):
    CODE_UNSPECIFIED = "CODE_UNSPECIFIED"
    OK = "OK"
    FAILED = "FAILED"
    UNKNOWN = "UNKNOWN"


@dataclass_json
@dataclass
class Status:
    r"""Status
    Status specifies state for the subcomponent.
    """
    
    code: Optional[StatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
