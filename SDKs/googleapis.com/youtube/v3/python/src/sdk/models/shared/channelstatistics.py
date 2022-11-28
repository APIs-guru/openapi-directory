from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ChannelStatistics:
    r"""ChannelStatistics
    Statistics about a channel: number of subscribers, number of videos in the channel, etc.
    """
    
    comment_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentCount') }})
    hidden_subscriber_count: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiddenSubscriberCount') }})
    subscriber_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriberCount') }})
    video_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoCount') }})
    view_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewCount') }})
    
