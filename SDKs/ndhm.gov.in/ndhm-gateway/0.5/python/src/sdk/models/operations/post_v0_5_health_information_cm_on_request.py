from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05HealthInformationCmOnRequestHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05HealthInformationCmOnRequestRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    hiu_health_information_request_response: Optional[shared.HiuHealthInformationRequestResponse] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05HealthInformationCmOnRequestRequest:
    headers: PostV05HealthInformationCmOnRequestHeaders = field()
    request: PostV05HealthInformationCmOnRequestRequests = field()
    

@dataclass
class PostV05HealthInformationCmOnRequestResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
