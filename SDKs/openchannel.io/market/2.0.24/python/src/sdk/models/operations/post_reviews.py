from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostReviewsQueryParams:
    app_id: str = field(metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    description: str = field(metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    headline: str = field(metadata={'query_param': { 'field_name': 'headline', 'style': 'form', 'explode': True }})
    rating: int = field(metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    user_id: str = field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    auto_approve: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'autoApprove', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    must_own_app: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'mustOwnApp', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    user_account_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userAccountId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostReviewsRequest:
    query_params: PostReviewsQueryParams = field()
    

@dataclass
class PostReviewsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
