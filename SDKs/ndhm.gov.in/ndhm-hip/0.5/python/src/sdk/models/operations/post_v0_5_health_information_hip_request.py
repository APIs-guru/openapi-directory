from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
POST_V0_5_HEALTH_INFORMATION_HIP_REQUEST_SERVERS = [
	"https://your-hrp-server.com",
]


@dataclass
class PostV05HealthInformationHipRequestHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = field(default=None, metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05HealthInformationHipRequestRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    hip_health_information_request: Optional[shared.HipHealthInformationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05HealthInformationHipRequestRequest:
    server_url: Optional[str] = field(default=None)
    headers: PostV05HealthInformationHipRequestHeaders = field(default=None)
    request: PostV05HealthInformationHipRequestRequests = field(default=None)
    

@dataclass
class PostV05HealthInformationHipRequestResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
