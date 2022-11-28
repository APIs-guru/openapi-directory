from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ImapSettingsExpungeBehaviorEnum(str, Enum):
    EXPUNGE_BEHAVIOR_UNSPECIFIED = "expungeBehaviorUnspecified"
    ARCHIVE = "archive"
    TRASH = "trash"
    DELETE_FOREVER = "deleteForever"


@dataclass_json
@dataclass
class ImapSettings:
    r"""ImapSettings
    IMAP settings for an account.
    """
    
    auto_expunge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoExpunge') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    expunge_behavior: Optional[ImapSettingsExpungeBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expungeBehavior') }})
    max_folder_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxFolderSize') }})
    
