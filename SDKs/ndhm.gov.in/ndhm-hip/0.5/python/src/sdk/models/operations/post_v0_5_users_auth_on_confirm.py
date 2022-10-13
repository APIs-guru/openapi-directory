from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
POST_V0_5_USERS_AUTH_ON_CONFIRM_SERVERS = [
	"https://your-hrp-server.com",
]


@dataclass
class PostV05UsersAuthOnConfirmHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    x_hip_id: str = field(default=None, metadata={'header': { 'field_name': 'X-HIP-ID' }})
    x_hiu_id: str = field(default=None, metadata={'header': { 'field_name': 'X-HIU-ID' }})
    

@dataclass
class PostV05UsersAuthOnConfirmRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    patient_auth_confirm_response: Optional[shared.PatientAuthConfirmResponse] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05UsersAuthOnConfirmRequest:
    server_url: Optional[str] = field(default=None)
    headers: PostV05UsersAuthOnConfirmHeaders = field(default=None)
    request: PostV05UsersAuthOnConfirmRequests = field(default=None)
    

@dataclass
class PostV05UsersAuthOnConfirmResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
