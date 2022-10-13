from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DelegateVerificationStatusEnum(str, Enum):
    VERIFICATION_STATUS_UNSPECIFIED = "verificationStatusUnspecified"
    ACCEPTED = "accepted"
    PENDING = "pending"
    REJECTED = "rejected"
    EXPIRED = "expired"


@dataclass_json
@dataclass
class Delegate:
    delegate_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delegateEmail' }})
    verification_status: Optional[DelegateVerificationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationStatus' }})
    
