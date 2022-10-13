from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
POST_V0_5_CONSENTS_HIU_NOTIFY_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
]


@dataclass
class PostV05ConsentsHiuNotifyHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    x_hiu_id: str = field(default=None, metadata={'header': { 'field_name': 'X-HIU-ID' }})
    

@dataclass
class PostV05ConsentsHiuNotifyRequest:
    server_url: Optional[str] = field(default=None)
    headers: PostV05ConsentsHiuNotifyHeaders = field(default=None)
    request: shared.HiuConsentNotificationEvent = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05ConsentsHiuNotifyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
