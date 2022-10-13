from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import reviewreply
from . import reviewer

class ReviewStarRatingEnum(str, Enum):
    STAR_RATING_UNSPECIFIED = "STAR_RATING_UNSPECIFIED"
    ONE = "ONE"
    TWO = "TWO"
    THREE = "THREE"
    FOUR = "FOUR"
    FIVE = "FIVE"


@dataclass_json
@dataclass
class Review:
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    review_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewId' }})
    review_reply: Optional[reviewreply.ReviewReply] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewReply' }})
    reviewer: Optional[reviewer.Reviewer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewer' }})
    star_rating: Optional[ReviewStarRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starRating' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
