from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import review


@dataclass_json
@dataclass
class ListReviewsResponse:
    average_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageRating' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    reviews: Optional[List[review.Review]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviews' }})
    total_review_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalReviewCount' }})
    
