from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05HealthInformationCmRequestHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    x_cm_id: str = field(default=None, metadata={'header': { 'field_name': 'X-CM-ID' }})
    

@dataclass
class PostV05HealthInformationCmRequestRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    hi_request: Optional[shared.HiRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05HealthInformationCmRequestRequest:
    headers: PostV05HealthInformationCmRequestHeaders = field(default=None)
    request: PostV05HealthInformationCmRequestRequests = field(default=None)
    

@dataclass
class PostV05HealthInformationCmRequestResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
