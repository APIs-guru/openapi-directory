from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LiveChatGiftMembershipReceivedDetails:
    associated_membership_gifting_message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associatedMembershipGiftingMessageId' }})
    gifter_channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gifterChannelId' }})
    member_level_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberLevelName' }})
    
