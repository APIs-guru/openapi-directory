from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05SubscriptionRequestsHiuNotifyHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = field(default=None, metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05SubscriptionRequestsHiuNotifyRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    subscription_approval_notification: Optional[shared.SubscriptionApprovalNotification] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05SubscriptionRequestsHiuNotifyRequest:
    headers: PostV05SubscriptionRequestsHiuNotifyHeaders = field(default=None)
    request: PostV05SubscriptionRequestsHiuNotifyRequests = field(default=None)
    

@dataclass
class PostV05SubscriptionRequestsHiuNotifyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
