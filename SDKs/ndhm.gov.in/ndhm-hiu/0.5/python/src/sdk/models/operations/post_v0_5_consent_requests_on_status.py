from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


POST_V0_5_CONSENT_REQUESTS_ON_STATUS_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
]


@dataclass
class PostV05ConsentRequestsOnStatusHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05ConsentRequestsOnStatusRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    hiu_consent_request_status: Optional[shared.HiuConsentRequestStatus] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05ConsentRequestsOnStatusRequest:
    headers: PostV05ConsentRequestsOnStatusHeaders = field()
    request: PostV05ConsentRequestsOnStatusRequests = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class PostV05ConsentRequestsOnStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
