from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestReviewPathParams:
    project_id: int = field(default=None, metadata={'path_param': { 'field_name': 'project-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestReviewQueryParams:
    base: str = field(default=None, metadata={'query_param': { 'field_name': 'base', 'style': 'form', 'explode': True }})
    callback_secret: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback-secret', 'style': 'form', 'explode': True }})
    callback_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback-url', 'style': 'form', 'explode': True }})
    external_id: int = field(default=None, metadata={'query_param': { 'field_name': 'external-id', 'style': 'form', 'explode': True }})
    review_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'review-url', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestReviewSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RequestReviewRequest:
    path_params: RequestReviewPathParams = field(default=None)
    query_params: RequestReviewQueryParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    security: RequestReviewSecurity = field(default=None)
    

@dataclass
class RequestReviewResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    operation: Optional[shared.Operation] = field(default=None)
    
