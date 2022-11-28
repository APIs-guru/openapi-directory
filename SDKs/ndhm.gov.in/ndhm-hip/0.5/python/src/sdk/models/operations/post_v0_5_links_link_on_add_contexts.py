from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


POST_V0_5_LINKS_LINK_ON_ADD_CONTEXTS_SERVERS = [
	"https://your-hrp-server.com",
]


@dataclass
class PostV05LinksLinkOnAddContextsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = field(metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05LinksLinkOnAddContextsRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_care_context_link_response: Optional[shared.PatientCareContextLinkResponse] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05LinksLinkOnAddContextsRequest:
    headers: PostV05LinksLinkOnAddContextsHeaders = field()
    request: PostV05LinksLinkOnAddContextsRequests = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class PostV05LinksLinkOnAddContextsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
