from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchGetReviewsRequest:
    r"""BatchGetReviewsRequest
    Request message for Reviews.BatchGetReviews.
    """
    
    ignore_rating_only_reviews: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreRatingOnlyReviews') }})
    location_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationNames') }})
    order_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    
