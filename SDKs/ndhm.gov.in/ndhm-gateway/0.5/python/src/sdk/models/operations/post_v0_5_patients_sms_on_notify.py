from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05PatientsSmsOnNotifyHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = field(metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05PatientsSmsOnNotifyRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_sms_notifcation_response: Optional[shared.PatientSmsNotifcationResponse] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05PatientsSmsOnNotifyRequest:
    headers: PostV05PatientsSmsOnNotifyHeaders = field()
    request: PostV05PatientsSmsOnNotifyRequests = field()
    

@dataclass
class PostV05PatientsSmsOnNotifyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
