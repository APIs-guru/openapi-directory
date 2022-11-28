from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CheckErrorResponseStatusEnum(str, Enum):
    ZERO = "0"
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    FIVE = "5"
    SIX = "6"
    SIXTEEN = "16"
    SEVENTEEN = "17"


@dataclass_json
@dataclass
class CheckErrorResponse:
    r"""CheckErrorResponse
    Error
    """
    
    error_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_text') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    status: Optional[CheckErrorResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
