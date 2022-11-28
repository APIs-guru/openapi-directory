from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05SubscriptionsHiuNotifyHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05SubscriptionsHiuNotifyRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    hiu_subscription_notification: Optional[shared.HiuSubscriptionNotification] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05SubscriptionsHiuNotifyRequest:
    headers: PostV05SubscriptionsHiuNotifyHeaders = field()
    request: PostV05SubscriptionsHiuNotifyRequests = field()
    

@dataclass
class PostV05SubscriptionsHiuNotifyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
