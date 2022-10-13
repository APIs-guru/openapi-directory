from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import locationreview


@dataclass_json
@dataclass
class BatchGetReviewsResponse:
    location_reviews: Optional[List[locationreview.LocationReview]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationReviews' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
