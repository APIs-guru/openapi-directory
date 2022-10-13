from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ForwardingAddressVerificationStatusEnum(str, Enum):
    VERIFICATION_STATUS_UNSPECIFIED = "verificationStatusUnspecified"
    ACCEPTED = "accepted"
    PENDING = "pending"


@dataclass_json
@dataclass
class ForwardingAddress:
    forwarding_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwardingEmail' }})
    verification_status: Optional[ForwardingAddressVerificationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationStatus' }})
    
