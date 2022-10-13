from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChannelProfileDetails:
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelId' }})
    channel_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelUrl' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    profile_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileImageUrl' }})
    
