from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05SubscriptionRequestsHiuOnNotifyHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    x_cm_id: str = field(default=None, metadata={'header': { 'field_name': 'X-CM-ID' }})
    

@dataclass
class PostV05SubscriptionRequestsHiuOnNotifyRequest:
    headers: PostV05SubscriptionRequestsHiuOnNotifyHeaders = field(default=None)
    request: shared.HiuSubscriptionRequestNotificationAcknowledgement = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05SubscriptionRequestsHiuOnNotifyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
