from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCodeReviewPathParams:
    review_id: str = field(metadata={'path_param': { 'field_name': 'review-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCodeReviewSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetCodeReviewRequest:
    path_params: GetCodeReviewPathParams = field()
    security: GetCodeReviewSecurity = field()
    

@dataclass
class GetCodeReviewResponse:
    content_type: str = field()
    status_code: int = field()
    code_reviews: Optional[List[shared.CodeReview]] = field(default=None)
    
