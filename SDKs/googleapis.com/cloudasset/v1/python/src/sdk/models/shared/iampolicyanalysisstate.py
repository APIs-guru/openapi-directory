from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class IamPolicyAnalysisStateCodeEnum(str, Enum):
    OK = "OK"
    CANCELLED = "CANCELLED"
    UNKNOWN = "UNKNOWN"
    INVALID_ARGUMENT = "INVALID_ARGUMENT"
    DEADLINE_EXCEEDED = "DEADLINE_EXCEEDED"
    NOT_FOUND = "NOT_FOUND"
    ALREADY_EXISTS = "ALREADY_EXISTS"
    PERMISSION_DENIED = "PERMISSION_DENIED"
    UNAUTHENTICATED = "UNAUTHENTICATED"
    RESOURCE_EXHAUSTED = "RESOURCE_EXHAUSTED"
    FAILED_PRECONDITION = "FAILED_PRECONDITION"
    ABORTED = "ABORTED"
    OUT_OF_RANGE = "OUT_OF_RANGE"
    UNIMPLEMENTED = "UNIMPLEMENTED"
    INTERNAL = "INTERNAL"
    UNAVAILABLE = "UNAVAILABLE"
    DATA_LOSS = "DATA_LOSS"


@dataclass_json
@dataclass
class IamPolicyAnalysisState:
    cause: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cause' }})
    code: Optional[IamPolicyAnalysisStateCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    
