from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PatchReviewsReviewIDPathParams:
    review_id: str = field(default=None, metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchReviewsReviewIDQueryParams:
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    headline: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'headline', 'style': 'form', 'explode': True }})
    rating: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    user_account_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userAccountId', 'style': 'form', 'explode': True }})
    user_id: str = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class PatchReviewsReviewIDRequest:
    path_params: PatchReviewsReviewIDPathParams = field(default=None)
    query_params: PatchReviewsReviewIDQueryParams = field(default=None)
    

@dataclass
class PatchReviewsReviewIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
