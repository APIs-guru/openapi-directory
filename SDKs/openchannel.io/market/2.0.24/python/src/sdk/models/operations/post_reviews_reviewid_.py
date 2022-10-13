from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostReviewsReviewIDPathParams:
    review_id: str = field(default=None, metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostReviewsReviewIDQueryParams:
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    description: str = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    headline: str = field(default=None, metadata={'query_param': { 'field_name': 'headline', 'style': 'form', 'explode': True }})
    rating: int = field(default=None, metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    user_account_id: str = field(default=None, metadata={'query_param': { 'field_name': 'userAccountId', 'style': 'form', 'explode': True }})
    user_id: str = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostReviewsReviewIDRequest:
    path_params: PostReviewsReviewIDPathParams = field(default=None)
    query_params: PostReviewsReviewIDQueryParams = field(default=None)
    

@dataclass
class PostReviewsReviewIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
