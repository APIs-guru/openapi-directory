from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05ConsentsHipOnNotifyHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05ConsentsHipOnNotifyRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    hip_consent_notification_response: Optional[shared.HipConsentNotificationResponse] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05ConsentsHipOnNotifyRequest:
    headers: PostV05ConsentsHipOnNotifyHeaders = field(default=None)
    request: PostV05ConsentsHipOnNotifyRequests = field(default=None)
    

@dataclass
class PostV05ConsentsHipOnNotifyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
