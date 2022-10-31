from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05HealthInformationCmOnRequestHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = field(default=None, metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05HealthInformationCmOnRequestRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    hiu_health_information_request_response: Optional[shared.HiuHealthInformationRequestResponse] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05HealthInformationCmOnRequestRequest:
    headers: PostV05HealthInformationCmOnRequestHeaders = field(default=None)
    request: PostV05HealthInformationCmOnRequestRequests = field(default=None)
    

@dataclass
class PostV05HealthInformationCmOnRequestResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
