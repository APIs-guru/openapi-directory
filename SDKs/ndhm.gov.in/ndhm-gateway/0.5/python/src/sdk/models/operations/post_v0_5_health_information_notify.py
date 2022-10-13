from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05HealthInformationNotifyHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    x_cm_id: str = field(default=None, metadata={'header': { 'field_name': 'X-CM-ID' }})
    

@dataclass
class PostV05HealthInformationNotifyRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    health_information_notification: Optional[shared.HealthInformationNotification] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05HealthInformationNotifyRequest:
    headers: PostV05HealthInformationNotifyHeaders = field(default=None)
    request: PostV05HealthInformationNotifyRequests = field(default=None)
    

@dataclass
class PostV05HealthInformationNotifyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
