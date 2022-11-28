from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PopSettingsAccessWindowEnum(str, Enum):
    ACCESS_WINDOW_UNSPECIFIED = "accessWindowUnspecified"
    DISABLED = "disabled"
    FROM_NOW_ON = "fromNowOn"
    ALL_MAIL = "allMail"

class PopSettingsDispositionEnum(str, Enum):
    DISPOSITION_UNSPECIFIED = "dispositionUnspecified"
    LEAVE_IN_INBOX = "leaveInInbox"
    ARCHIVE = "archive"
    TRASH = "trash"
    MARK_READ = "markRead"


@dataclass_json
@dataclass
class PopSettings:
    r"""PopSettings
    POP settings for an account.
    """
    
    access_window: Optional[PopSettingsAccessWindowEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessWindow') }})
    disposition: Optional[PopSettingsDispositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disposition') }})
    
