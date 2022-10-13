from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
POST_V0_5_CONSENTS_HIP_NOTIFY_SERVERS = [
	"https://your-hrp-server.com",
]


@dataclass
class PostV05ConsentsHipNotifyHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    x_hip_id: str = field(default=None, metadata={'header': { 'field_name': 'X-HIP-ID' }})
    

@dataclass
class PostV05ConsentsHipNotifyRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    hip_consent_notification: Optional[shared.HipConsentNotification] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05ConsentsHipNotifyRequest:
    server_url: Optional[str] = field(default=None)
    headers: PostV05ConsentsHipNotifyHeaders = field(default=None)
    request: PostV05ConsentsHipNotifyRequests = field(default=None)
    

@dataclass
class PostV05ConsentsHipNotifyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
