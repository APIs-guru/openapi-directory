from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCodeReviewPathParams:
    review_id: str = field(default=None, metadata={'path_param': { 'field_name': 'review-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCodeReviewSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetCodeReviewRequest:
    path_params: GetCodeReviewPathParams = field(default=None)
    security: GetCodeReviewSecurity = field(default=None)
    

@dataclass
class GetCodeReviewResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    code_reviews: Optional[List[shared.CodeReview]] = field(default=None)
    
