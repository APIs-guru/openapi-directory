from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05HealthInformationRequestHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05HealthInformationRequestRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    hi_request: Optional[shared.HiRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05HealthInformationRequestRequest:
    headers: PostV05HealthInformationRequestHeaders = field()
    request: PostV05HealthInformationRequestRequests = field()
    

@dataclass
class PostV05HealthInformationRequestResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
