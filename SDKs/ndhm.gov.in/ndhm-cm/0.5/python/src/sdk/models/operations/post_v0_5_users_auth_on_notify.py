from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05UsersAuthOnNotifyHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05UsersAuthOnNotifyRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_auth_notification_acknowledgement: Optional[shared.PatientAuthNotificationAcknowledgement] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05UsersAuthOnNotifyRequest:
    headers: PostV05UsersAuthOnNotifyHeaders = field()
    request: PostV05UsersAuthOnNotifyRequests = field()
    

@dataclass
class PostV05UsersAuthOnNotifyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
