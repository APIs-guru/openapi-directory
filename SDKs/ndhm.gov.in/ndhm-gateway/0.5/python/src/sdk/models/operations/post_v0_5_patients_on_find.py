from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05PatientsOnFindHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PostV05PatientsOnFindRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    patient_identification_response: Optional[shared.PatientIdentificationResponse] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05PatientsOnFindRequest:
    headers: PostV05PatientsOnFindHeaders = field(default=None)
    request: PostV05PatientsOnFindRequests = field(default=None)
    

@dataclass
class PostV05PatientsOnFindResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
