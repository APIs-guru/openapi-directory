from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PatchReviewsReviewIDPathParams:
    review_id: str = field(metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchReviewsReviewIDQueryParams:
    user_id: str = field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    headline: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'headline', 'style': 'form', 'explode': True }})
    rating: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    user_account_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userAccountId', 'style': 'form', 'explode': True }})
    

@dataclass
class PatchReviewsReviewIDRequest:
    path_params: PatchReviewsReviewIDPathParams = field()
    query_params: PatchReviewsReviewIDQueryParams = field()
    

@dataclass
class PatchReviewsReviewIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
