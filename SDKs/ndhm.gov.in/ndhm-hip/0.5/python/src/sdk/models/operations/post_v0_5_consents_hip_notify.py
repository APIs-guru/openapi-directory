from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


POST_V0_5_CONSENTS_HIP_NOTIFY_SERVERS = [
	"https://your-hrp-server.com",
]


@dataclass
class PostV05ConsentsHipNotifyHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = field(metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05ConsentsHipNotifyRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    hip_consent_notification: Optional[shared.HipConsentNotification] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05ConsentsHipNotifyRequest:
    headers: PostV05ConsentsHipNotifyHeaders = field()
    request: PostV05ConsentsHipNotifyRequests = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class PostV05ConsentsHipNotifyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
