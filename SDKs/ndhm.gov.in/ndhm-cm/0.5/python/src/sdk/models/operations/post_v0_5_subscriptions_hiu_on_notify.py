from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05SubscriptionsHiuOnNotifyHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05SubscriptionsHiuOnNotifyRequest:
    headers: PostV05SubscriptionsHiuOnNotifyHeaders = field()
    request: shared.HiuSubscriptionNotificationAcknowledgment = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05SubscriptionsHiuOnNotifyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
