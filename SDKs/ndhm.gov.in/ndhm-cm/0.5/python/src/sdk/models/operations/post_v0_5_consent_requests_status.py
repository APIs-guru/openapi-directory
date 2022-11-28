from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05ConsentRequestsStatusHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05ConsentRequestsStatusRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    consent_request_status_request: Optional[shared.ConsentRequestStatusRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05ConsentRequestsStatusRequest:
    headers: PostV05ConsentRequestsStatusHeaders = field()
    request: PostV05ConsentRequestsStatusRequests = field()
    

@dataclass
class PostV05ConsentRequestsStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
