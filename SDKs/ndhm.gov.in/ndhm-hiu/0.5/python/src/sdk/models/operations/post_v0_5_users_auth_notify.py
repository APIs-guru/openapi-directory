from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05UsersAuthNotifyHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    x_hip_id: str = field(default=None, metadata={'header': { 'field_name': 'X-HIP-ID' }})
    x_hiu_id: str = field(default=None, metadata={'header': { 'field_name': 'X-HIU-ID' }})
    

@dataclass
class PostV05UsersAuthNotifyRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    patient_auth_notification: Optional[shared.PatientAuthNotification] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05UsersAuthNotifyRequest:
    headers: PostV05UsersAuthNotifyHeaders = field(default=None)
    request: PostV05UsersAuthNotifyRequests = field(default=None)
    

@dataclass
class PostV05UsersAuthNotifyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
