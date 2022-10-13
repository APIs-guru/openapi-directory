from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
POST_V0_5_LINKS_LINK_ON_ADD_CONTEXTS_SERVERS = [
	"https://your-hrp-server.com",
]


@dataclass
class PostV05LinksLinkOnAddContextsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    x_hip_id: str = field(default=None, metadata={'header': { 'field_name': 'X-HIP-ID' }})
    

@dataclass
class PostV05LinksLinkOnAddContextsRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    patient_care_context_link_response: Optional[shared.PatientCareContextLinkResponse] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05LinksLinkOnAddContextsRequest:
    server_url: Optional[str] = field(default=None)
    headers: PostV05LinksLinkOnAddContextsHeaders = field(default=None)
    request: PostV05LinksLinkOnAddContextsRequests = field(default=None)
    

@dataclass
class PostV05LinksLinkOnAddContextsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
