from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestReviewPathParams:
    project_id: int = field(metadata={'path_param': { 'field_name': 'project-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestReviewQueryParams:
    base: str = field(metadata={'query_param': { 'field_name': 'base', 'style': 'form', 'explode': True }})
    external_id: int = field(metadata={'query_param': { 'field_name': 'external-id', 'style': 'form', 'explode': True }})
    callback_secret: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback-secret', 'style': 'form', 'explode': True }})
    callback_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback-url', 'style': 'form', 'explode': True }})
    review_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'review-url', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestReviewSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RequestReviewRequest:
    path_params: RequestReviewPathParams = field()
    query_params: RequestReviewQueryParams = field()
    request: bytes = field(metadata={'request': { 'media_type': 'application/octet-stream' }})
    security: RequestReviewSecurity = field()
    

@dataclass
class RequestReviewResponse:
    content_type: str = field()
    status_code: int = field()
    operation: Optional[shared.Operation] = field(default=None)
    
