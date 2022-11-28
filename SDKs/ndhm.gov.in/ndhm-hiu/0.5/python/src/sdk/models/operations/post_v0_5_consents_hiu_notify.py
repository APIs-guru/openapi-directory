from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


POST_V0_5_CONSENTS_HIU_NOTIFY_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
]


@dataclass
class PostV05ConsentsHiuNotifyHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05ConsentsHiuNotifyRequest:
    headers: PostV05ConsentsHiuNotifyHeaders = field()
    request: shared.HiuConsentNotificationEvent = field(metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class PostV05ConsentsHiuNotifyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
