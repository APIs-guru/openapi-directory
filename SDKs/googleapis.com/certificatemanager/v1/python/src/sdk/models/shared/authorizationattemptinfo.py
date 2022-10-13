from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AuthorizationAttemptInfoFailureReasonEnum(str, Enum):
    FAILURE_REASON_UNSPECIFIED = "FAILURE_REASON_UNSPECIFIED"
    CONFIG = "CONFIG"
    CAA = "CAA"
    RATE_LIMITED = "RATE_LIMITED"

class AuthorizationAttemptInfoStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    AUTHORIZING = "AUTHORIZING"
    AUTHORIZED = "AUTHORIZED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class AuthorizationAttemptInfo:
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    failure_reason: Optional[AuthorizationAttemptInfoFailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    state: Optional[AuthorizationAttemptInfoStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
