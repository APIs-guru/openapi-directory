from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListReviewsResponse:
    r"""ListReviewsResponse
    Response message for Reviews.ListReviews.
    """
    
    average_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageRating') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    reviews: Optional[List[Review]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviews') }})
    total_review_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalReviewCount') }})
    
