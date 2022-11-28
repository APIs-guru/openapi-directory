from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


POST_V0_5_PATIENTS_PROFILE_SHARE_SERVERS = [
	"https://your-hrp-server.com",
]


@dataclass
class PostV05PatientsProfileShareHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = field(metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05PatientsProfileShareRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    share_profile_request: Optional[shared.ShareProfileRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05PatientsProfileShareRequest:
    headers: PostV05PatientsProfileShareHeaders = field()
    request: PostV05PatientsProfileShareRequests = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class PostV05PatientsProfileShareResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
