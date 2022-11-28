from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


POST_V0_5_CARE_CONTEXTS_DISCOVER_SERVERS = [
	"https://your-hrp-server.com",
]


@dataclass
class PostV05CareContextsDiscoverHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = field(metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05CareContextsDiscoverRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_discovery_request: Optional[shared.PatientDiscoveryRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05CareContextsDiscoverRequest:
    headers: PostV05CareContextsDiscoverHeaders = field()
    request: PostV05CareContextsDiscoverRequests = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class PostV05CareContextsDiscoverResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
