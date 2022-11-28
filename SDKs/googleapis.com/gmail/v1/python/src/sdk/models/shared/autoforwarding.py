from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AutoForwardingDispositionEnum(str, Enum):
    DISPOSITION_UNSPECIFIED = "dispositionUnspecified"
    LEAVE_IN_INBOX = "leaveInInbox"
    ARCHIVE = "archive"
    TRASH = "trash"
    MARK_READ = "markRead"


@dataclass_json
@dataclass
class AutoForwarding:
    r"""AutoForwarding
    Auto-forwarding settings for an account.
    """
    
    disposition: Optional[AutoForwardingDispositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disposition') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
