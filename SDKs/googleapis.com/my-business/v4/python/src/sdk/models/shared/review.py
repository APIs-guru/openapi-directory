from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Review
    Output only. Represents a review for a location.
    """
    
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    review_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewId') }})
    review_reply: Optional[ReviewReply] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewReply') }})
    reviewer: Optional[Reviewer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewer') }})
    star_rating: Optional[ReviewStarRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starRating') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
