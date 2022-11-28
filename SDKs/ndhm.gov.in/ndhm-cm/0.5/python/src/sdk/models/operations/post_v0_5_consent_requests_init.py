from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05ConsentRequestsInitHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05ConsentRequestsInitRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    consent_request: Optional[shared.ConsentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05ConsentRequestsInitRequest:
    headers: PostV05ConsentRequestsInitHeaders = field()
    request: PostV05ConsentRequestsInitRequests = field()
    

@dataclass
class PostV05ConsentRequestsInitResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
