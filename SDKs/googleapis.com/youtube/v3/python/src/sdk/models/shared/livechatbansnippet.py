from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import channelprofiledetails

class LiveChatBanSnippetTypeEnum(str, Enum):
    LIVE_CHAT_BAN_TYPE_UNSPECIFIED = "liveChatBanTypeUnspecified"
    PERMANENT = "permanent"
    TEMPORARY = "temporary"


@dataclass_json
@dataclass
class LiveChatBanSnippet:
    ban_duration_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'banDurationSeconds' }})
    banned_user_details: Optional[channelprofiledetails.ChannelProfileDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bannedUserDetails' }})
    live_chat_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liveChatId' }})
    type: Optional[LiveChatBanSnippetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
