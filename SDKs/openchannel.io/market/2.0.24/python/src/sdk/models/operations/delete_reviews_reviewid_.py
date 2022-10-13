from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteReviewsReviewIDPathParams:
    review_id: str = field(default=None, metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteReviewsReviewIDQueryParams:
    user_account_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userAccountId', 'style': 'form', 'explode': True }})
    user_id: str = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteReviewsReviewIDRequest:
    path_params: DeleteReviewsReviewIDPathParams = field(default=None)
    query_params: DeleteReviewsReviewIDQueryParams = field(default=None)
    

@dataclass
class DeleteReviewsReviewIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
