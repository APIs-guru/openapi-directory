from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VideoRatingRatingEnum(str, Enum):
    NONE = "none"
    LIKE = "like"
    DISLIKE = "dislike"


@dataclass_json
@dataclass
class VideoRating:
    r"""VideoRating
    Basic details about rating of a video.
    """
    
    rating: Optional[VideoRatingRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    video_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoId') }})
    
