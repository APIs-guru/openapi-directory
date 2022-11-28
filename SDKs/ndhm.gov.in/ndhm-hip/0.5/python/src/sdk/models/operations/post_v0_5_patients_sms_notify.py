from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05PatientsSmsNotifyHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_cm_id: str = field(metadata={'header': { 'field_name': 'X-CM-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05PatientsSmsNotifyRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_sms_notifcation_request: Optional[shared.PatientSmsNotifcationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05PatientsSmsNotifyRequest:
    headers: PostV05PatientsSmsNotifyHeaders = field()
    request: PostV05PatientsSmsNotifyRequests = field()
    

@dataclass
class PostV05PatientsSmsNotifyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
