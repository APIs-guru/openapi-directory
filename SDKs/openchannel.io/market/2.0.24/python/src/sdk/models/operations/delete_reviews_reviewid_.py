from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteReviewsReviewIDPathParams:
    review_id: str = field(metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteReviewsReviewIDQueryParams:
    user_id: str = field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    user_account_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userAccountId', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteReviewsReviewIDRequest:
    path_params: DeleteReviewsReviewIDPathParams = field()
    query_params: DeleteReviewsReviewIDQueryParams = field()
    

@dataclass
class DeleteReviewsReviewIDResponse:
    content_type: str = field()
    status_code: int = field()
    
