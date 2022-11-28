from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


POST_V0_5_LINKS_LINK_CONFIRM_SERVERS = [
	"https://your-hrp-server.com",
]


@dataclass
class PostV05LinksLinkConfirmHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = field(metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05LinksLinkConfirmRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    link_confirmation_request: Optional[shared.LinkConfirmationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05LinksLinkConfirmRequest:
    headers: PostV05LinksLinkConfirmHeaders = field()
    request: PostV05LinksLinkConfirmRequests = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class PostV05LinksLinkConfirmResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
