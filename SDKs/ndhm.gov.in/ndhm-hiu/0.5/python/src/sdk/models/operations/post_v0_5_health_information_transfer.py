from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
POST_V0_5_HEALTH_INFORMATION_TRANSFER_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
]


@dataclass
class PostV05HealthInformationTransferHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PostV05HealthInformationTransferRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    data_notification: Optional[shared.DataNotification] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05HealthInformationTransferRequest:
    server_url: Optional[str] = field(default=None)
    headers: PostV05HealthInformationTransferHeaders = field(default=None)
    request: PostV05HealthInformationTransferRequests = field(default=None)
    

@dataclass
class PostV05HealthInformationTransferResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
