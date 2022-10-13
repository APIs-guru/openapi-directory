from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ErrorValueTypeEnum(str, Enum):
    ERROR_TYPE_UNSPECIFIED = "ERROR_TYPE_UNSPECIFIED"
    ERROR = "ERROR"
    NULL_VALUE = "NULL_VALUE"
    DIVIDE_BY_ZERO = "DIVIDE_BY_ZERO"
    VALUE = "VALUE"
    REF = "REF"
    NAME = "NAME"
    NUM = "NUM"
    N_A = "N_A"
    LOADING = "LOADING"


@dataclass_json
@dataclass
class ErrorValue:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    type: Optional[ErrorValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
