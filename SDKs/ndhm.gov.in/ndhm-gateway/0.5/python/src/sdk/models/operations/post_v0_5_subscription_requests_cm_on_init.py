from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05SubscriptionRequestsCmOnInitHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    x_hiu_id: str = field(default=None, metadata={'header': { 'field_name': 'X-HIU-ID' }})
    

@dataclass
class PostV05SubscriptionRequestsCmOnInitRequest:
    headers: PostV05SubscriptionRequestsCmOnInitHeaders = field(default=None)
    request: shared.HiuSubscriptionRequestReceipt = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05SubscriptionRequestsCmOnInitResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
