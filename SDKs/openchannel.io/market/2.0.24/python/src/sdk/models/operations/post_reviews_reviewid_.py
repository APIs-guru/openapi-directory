from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostReviewsReviewIDPathParams:
    review_id: str = field(metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostReviewsReviewIDQueryParams:
    description: str = field(metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    headline: str = field(metadata={'query_param': { 'field_name': 'headline', 'style': 'form', 'explode': True }})
    rating: int = field(metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    user_account_id: str = field(metadata={'query_param': { 'field_name': 'userAccountId', 'style': 'form', 'explode': True }})
    user_id: str = field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    

@dataclass
class PostReviewsReviewIDRequest:
    path_params: PostReviewsReviewIDPathParams = field()
    query_params: PostReviewsReviewIDQueryParams = field()
    

@dataclass
class PostReviewsReviewIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
