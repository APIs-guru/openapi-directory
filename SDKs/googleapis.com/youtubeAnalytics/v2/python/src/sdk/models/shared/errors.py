from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import errorproto

class ErrorsCodeEnum(str, Enum):
    BAD_REQUEST = "BAD_REQUEST"
    FORBIDDEN = "FORBIDDEN"
    NOT_FOUND = "NOT_FOUND"
    CONFLICT = "CONFLICT"
    GONE = "GONE"
    PRECONDITION_FAILED = "PRECONDITION_FAILED"
    INTERNAL_ERROR = "INTERNAL_ERROR"
    SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE"


@dataclass_json
@dataclass
class Errors:
    code: Optional[ErrorsCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    error: Optional[List[errorproto.ErrorProto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
