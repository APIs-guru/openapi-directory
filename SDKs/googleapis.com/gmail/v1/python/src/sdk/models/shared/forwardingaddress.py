from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ForwardingAddressVerificationStatusEnum(str, Enum):
    VERIFICATION_STATUS_UNSPECIFIED = "verificationStatusUnspecified"
    ACCEPTED = "accepted"
    PENDING = "pending"


@dataclass_json
@dataclass
class ForwardingAddress:
    r"""ForwardingAddress
    Settings for a forwarding address.
    """
    
    forwarding_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardingEmail') }})
    verification_status: Optional[ForwardingAddressVerificationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationStatus') }})
    
