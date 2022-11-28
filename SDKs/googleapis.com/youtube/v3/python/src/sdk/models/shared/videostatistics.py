from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VideoStatistics:
    r"""VideoStatistics
    Statistics about the video, such as the number of times the video was viewed or liked.
    """
    
    comment_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentCount') }})
    dislike_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dislikeCount') }})
    favorite_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('favoriteCount') }})
    like_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likeCount') }})
    view_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewCount') }})
    
