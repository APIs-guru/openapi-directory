from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LiveChatMessageAuthorDetails:
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    channel_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelUrl') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    is_chat_moderator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isChatModerator') }})
    is_chat_owner: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isChatOwner') }})
    is_chat_sponsor: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isChatSponsor') }})
    is_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isVerified') }})
    profile_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileImageUrl') }})
    
