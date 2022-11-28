from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05UsersAuthOnConfirmHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = field(metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05UsersAuthOnConfirmRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_auth_confirm_response: Optional[shared.PatientAuthConfirmResponse] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05UsersAuthOnConfirmRequest:
    headers: PostV05UsersAuthOnConfirmHeaders = field()
    request: PostV05UsersAuthOnConfirmRequests = field()
    

@dataclass
class PostV05UsersAuthOnConfirmResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
