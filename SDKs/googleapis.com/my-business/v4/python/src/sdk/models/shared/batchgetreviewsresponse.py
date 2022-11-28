from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetReviewsResponse:
    r"""BatchGetReviewsResponse
    Response message for Reviews.BatchGetReviews.
    """
    
    location_reviews: Optional[List[LocationReview]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationReviews') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
