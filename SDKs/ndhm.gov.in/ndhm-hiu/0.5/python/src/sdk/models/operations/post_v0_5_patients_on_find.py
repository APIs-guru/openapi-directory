from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


POST_V0_5_PATIENTS_ON_FIND_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
]


@dataclass
class PostV05PatientsOnFindHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05PatientsOnFindRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_identification_response: Optional[shared.PatientIdentificationResponse] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05PatientsOnFindRequest:
    headers: PostV05PatientsOnFindHeaders = field()
    request: PostV05PatientsOnFindRequests = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class PostV05PatientsOnFindResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
