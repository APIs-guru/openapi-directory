from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05HealthInformationHipOnRequestHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_cm_id: str = field(metadata={'header': { 'field_name': 'X-CM-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05HealthInformationHipOnRequestRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    hip_health_information_request_acknowledgement: Optional[shared.HipHealthInformationRequestAcknowledgement] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05HealthInformationHipOnRequestRequest:
    headers: PostV05HealthInformationHipOnRequestHeaders = field()
    request: PostV05HealthInformationHipOnRequestRequests = field()
    

@dataclass
class PostV05HealthInformationHipOnRequestResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
