from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VideoRatingRatingEnum(str, Enum):
    NONE = "none"
    LIKE = "like"
    DISLIKE = "dislike"


@dataclass_json
@dataclass
class VideoRating:
    rating: Optional[VideoRatingRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    video_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoId' }})
    
