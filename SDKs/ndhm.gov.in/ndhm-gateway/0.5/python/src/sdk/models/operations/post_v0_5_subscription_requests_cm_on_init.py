from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05SubscriptionRequestsCmOnInitHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05SubscriptionRequestsCmOnInitRequest:
    headers: PostV05SubscriptionRequestsCmOnInitHeaders = field()
    request: shared.HiuSubscriptionRequestReceipt = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05SubscriptionRequestsCmOnInitResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
