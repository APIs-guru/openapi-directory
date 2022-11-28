from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


POST_V0_5_HEALTH_INFORMATION_TRANSFER_SERVERS = [
	"https://dev.ndhm.gov.in/patient-hiu",
]


@dataclass
class PostV05HealthInformationTransferHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05HealthInformationTransferRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    data_notification: Optional[shared.DataNotification] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05HealthInformationTransferRequest:
    headers: PostV05HealthInformationTransferHeaders = field()
    request: PostV05HealthInformationTransferRequests = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class PostV05HealthInformationTransferResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
