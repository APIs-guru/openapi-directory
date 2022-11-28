from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


POST_V0_5_USERS_AUTH_ON_INIT_SERVERS = [
	"https://your-hrp-server.com",
]


@dataclass
class PostV05UsersAuthOnInitHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = field(metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05UsersAuthOnInitRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_auth_init_response: Optional[shared.PatientAuthInitResponse] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05UsersAuthOnInitRequest:
    headers: PostV05UsersAuthOnInitHeaders = field()
    request: PostV05UsersAuthOnInitRequests = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class PostV05UsersAuthOnInitResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
