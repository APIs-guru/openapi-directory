from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
POST_V0_5_PATIENTS_PROFILE_SHARE_SERVERS = [
	"https://your-hrp-server.com",
]


@dataclass
class PostV05PatientsProfileShareHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    x_hip_id: str = field(default=None, metadata={'header': { 'field_name': 'X-HIP-ID' }})
    

@dataclass
class PostV05PatientsProfileShareRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    share_profile_request: Optional[shared.ShareProfileRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05PatientsProfileShareRequest:
    server_url: Optional[str] = field(default=None)
    headers: PostV05PatientsProfileShareHeaders = field(default=None)
    request: PostV05PatientsProfileShareRequests = field(default=None)
    

@dataclass
class PostV05PatientsProfileShareResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
