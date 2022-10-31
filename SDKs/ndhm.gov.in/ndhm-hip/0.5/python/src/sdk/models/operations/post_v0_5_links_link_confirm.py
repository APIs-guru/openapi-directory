from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
POST_V0_5_LINKS_LINK_CONFIRM_SERVERS = [
	"https://your-hrp-server.com",
]


@dataclass
class PostV05LinksLinkConfirmHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = field(default=None, metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05LinksLinkConfirmRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    link_confirmation_request: Optional[shared.LinkConfirmationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05LinksLinkConfirmRequest:
    server_url: Optional[str] = field(default=None)
    headers: PostV05LinksLinkConfirmHeaders = field(default=None)
    request: PostV05LinksLinkConfirmRequests = field(default=None)
    

@dataclass
class PostV05LinksLinkConfirmResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
