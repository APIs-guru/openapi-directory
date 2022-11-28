from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05HealthInformationOnRequestHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05HealthInformationOnRequestRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    hip_health_information_request_acknowledgement: Optional[shared.HipHealthInformationRequestAcknowledgement] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05HealthInformationOnRequestRequest:
    headers: PostV05HealthInformationOnRequestHeaders = field()
    request: PostV05HealthInformationOnRequestRequests = field()
    

@dataclass
class PostV05HealthInformationOnRequestResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
