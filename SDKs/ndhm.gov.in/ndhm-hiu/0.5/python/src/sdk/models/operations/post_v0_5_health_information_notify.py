from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05HealthInformationNotifyHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_cm_id: str = field(metadata={'header': { 'field_name': 'X-CM-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05HealthInformationNotifyRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    health_information_notification: Optional[shared.HealthInformationNotification] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05HealthInformationNotifyRequest:
    headers: PostV05HealthInformationNotifyHeaders = field()
    request: PostV05HealthInformationNotifyRequests = field()
    

@dataclass
class PostV05HealthInformationNotifyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
