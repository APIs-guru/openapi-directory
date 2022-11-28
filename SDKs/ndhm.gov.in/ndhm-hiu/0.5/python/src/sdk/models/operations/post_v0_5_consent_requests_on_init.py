from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


POST_V0_5_CONSENT_REQUESTS_ON_INIT_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
]


@dataclass
class PostV05ConsentRequestsOnInitHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05ConsentRequestsOnInitRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    consent_request_init_response: Optional[shared.ConsentRequestInitResponse] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05ConsentRequestsOnInitRequest:
    headers: PostV05ConsentRequestsOnInitHeaders = field()
    request: PostV05ConsentRequestsOnInitRequests = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class PostV05ConsentRequestsOnInitResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
