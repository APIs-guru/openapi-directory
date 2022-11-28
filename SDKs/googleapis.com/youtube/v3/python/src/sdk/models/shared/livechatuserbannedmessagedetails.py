from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class LiveChatUserBannedMessageDetailsBanTypeEnum(str, Enum):
    PERMANENT = "permanent"
    TEMPORARY = "temporary"


@dataclass_json
@dataclass
class LiveChatUserBannedMessageDetails:
    ban_duration_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('banDurationSeconds') }})
    ban_type: Optional[LiveChatUserBannedMessageDetailsBanTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('banType') }})
    banned_user_details: Optional[ChannelProfileDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannedUserDetails') }})
    
