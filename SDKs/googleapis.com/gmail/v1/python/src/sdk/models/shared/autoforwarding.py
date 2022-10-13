from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AutoForwardingDispositionEnum(str, Enum):
    DISPOSITION_UNSPECIFIED = "dispositionUnspecified"
    LEAVE_IN_INBOX = "leaveInInbox"
    ARCHIVE = "archive"
    TRASH = "trash"
    MARK_READ = "markRead"


@dataclass_json
@dataclass
class AutoForwarding:
    disposition: Optional[AutoForwardingDispositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disposition' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    
