from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


POST_V0_5_HEALTH_INFORMATION_HIU_ON_REQUEST_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
]


@dataclass
class PostV05HealthInformationHiuOnRequestHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05HealthInformationHiuOnRequestRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    hiu_health_information_request_response: Optional[shared.HiuHealthInformationRequestResponse] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05HealthInformationHiuOnRequestRequest:
    headers: PostV05HealthInformationHiuOnRequestHeaders = field()
    request: PostV05HealthInformationHiuOnRequestRequests = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class PostV05HealthInformationHiuOnRequestResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
