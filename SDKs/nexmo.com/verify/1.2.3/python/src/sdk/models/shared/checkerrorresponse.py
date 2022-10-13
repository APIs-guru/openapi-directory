from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    error_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_text' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    status: Optional[CheckErrorResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
