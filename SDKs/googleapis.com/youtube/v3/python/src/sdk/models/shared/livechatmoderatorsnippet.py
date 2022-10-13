from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import channelprofiledetails


@dataclass_json
@dataclass
class LiveChatModeratorSnippet:
    live_chat_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liveChatId' }})
    moderator_details: Optional[channelprofiledetails.ChannelProfileDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moderatorDetails' }})
    
