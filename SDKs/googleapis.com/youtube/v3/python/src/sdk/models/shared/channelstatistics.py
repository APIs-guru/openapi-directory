from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChannelStatistics:
    comment_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentCount' }})
    hidden_subscriber_count: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiddenSubscriberCount' }})
    subscriber_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriberCount' }})
    video_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoCount' }})
    view_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewCount' }})
    
