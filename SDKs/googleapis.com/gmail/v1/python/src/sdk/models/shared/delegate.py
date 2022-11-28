from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DelegateVerificationStatusEnum(str, Enum):
    VERIFICATION_STATUS_UNSPECIFIED = "verificationStatusUnspecified"
    ACCEPTED = "accepted"
    PENDING = "pending"
    REJECTED = "rejected"
    EXPIRED = "expired"


@dataclass_json
@dataclass
class Delegate:
    r"""Delegate
    Settings for a delegate. Delegates can read, send, and delete messages, as well as view and add contacts, for the delegator's account. See \"Set up mail delegation\" for more information about delegates.
    """
    
    delegate_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delegateEmail') }})
    verification_status: Optional[DelegateVerificationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationStatus') }})
    
