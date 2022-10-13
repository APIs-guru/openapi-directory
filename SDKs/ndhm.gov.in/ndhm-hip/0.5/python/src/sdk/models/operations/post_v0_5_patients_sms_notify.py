from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05PatientsSmsNotifyHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    x_cm_id: str = field(default=None, metadata={'header': { 'field_name': 'X-CM-ID' }})
    

@dataclass
class PostV05PatientsSmsNotifyRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    patient_sms_notifcation_request: Optional[shared.PatientSmsNotifcationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05PatientsSmsNotifyRequest:
    headers: PostV05PatientsSmsNotifyHeaders = field(default=None)
    request: PostV05PatientsSmsNotifyRequests = field(default=None)
    

@dataclass
class PostV05PatientsSmsNotifyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
