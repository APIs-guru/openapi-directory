from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05UsersAuthOnNotifyHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_cm_id: str = field(default=None, metadata={'header': { 'field_name': 'X-CM-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05UsersAuthOnNotifyRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    patient_auth_notification_acknowledgement: Optional[shared.PatientAuthNotificationAcknowledgement] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05UsersAuthOnNotifyRequest:
    headers: PostV05UsersAuthOnNotifyHeaders = field(default=None)
    request: PostV05UsersAuthOnNotifyRequests = field(default=None)
    

@dataclass
class PostV05UsersAuthOnNotifyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
