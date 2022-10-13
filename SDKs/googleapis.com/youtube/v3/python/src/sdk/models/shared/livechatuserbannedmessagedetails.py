from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import channelprofiledetails

class LiveChatUserBannedMessageDetailsBanTypeEnum(str, Enum):
    PERMANENT = "permanent"
    TEMPORARY = "temporary"


@dataclass_json
@dataclass
class LiveChatUserBannedMessageDetails:
    ban_duration_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'banDurationSeconds' }})
    ban_type: Optional[LiveChatUserBannedMessageDetailsBanTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'banType' }})
    banned_user_details: Optional[channelprofiledetails.ChannelProfileDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bannedUserDetails' }})
    
