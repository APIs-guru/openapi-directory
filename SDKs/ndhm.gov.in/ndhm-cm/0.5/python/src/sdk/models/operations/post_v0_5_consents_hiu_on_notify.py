from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05ConsentsHiuOnNotifyHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05ConsentsHiuOnNotifyRequest:
    headers: PostV05ConsentsHiuOnNotifyHeaders = field()
    request: shared.HiuConsentNotificationResponse = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05ConsentsHiuOnNotifyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
