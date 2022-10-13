from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ControlErrorResponseStatusEnum(str, Enum):
    ZERO = "0"
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    FIVE = "5"
    SIX = "6"
    EIGHT = "8"
    NINE = "9"
    NINETEEN = "19"


@dataclass_json
@dataclass
class ControlErrorResponse:
    error_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_text' }})
    status: Optional[ControlErrorResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
