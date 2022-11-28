from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetReviewsReviewIDPathParams:
    review_id: str = field(metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReviewsReviewIDRequest:
    path_params: GetReviewsReviewIDPathParams = field()
    

@dataclass
class GetReviewsReviewIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
