from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
POST_V0_5_CONSENT_REQUESTS_ON_INIT_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
]


@dataclass
class PostV05ConsentRequestsOnInitHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    x_hiu_id: str = field(default=None, metadata={'header': { 'field_name': 'X-HIU-ID' }})
    

@dataclass
class PostV05ConsentRequestsOnInitRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    consent_request_init_response: Optional[shared.ConsentRequestInitResponse] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05ConsentRequestsOnInitRequest:
    server_url: Optional[str] = field(default=None)
    headers: PostV05ConsentRequestsOnInitHeaders = field(default=None)
    request: PostV05ConsentRequestsOnInitRequests = field(default=None)
    

@dataclass
class PostV05ConsentRequestsOnInitResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
