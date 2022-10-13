from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05PatientsSmsOnNotifyHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    x_hip_id: str = field(default=None, metadata={'header': { 'field_name': 'X-HIP-ID' }})
    

@dataclass
class PostV05PatientsSmsOnNotifyRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    patient_sms_notifcation_response: Optional[shared.PatientSmsNotifcationResponse] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05PatientsSmsOnNotifyRequest:
    headers: PostV05PatientsSmsOnNotifyHeaders = field(default=None)
    request: PostV05PatientsSmsOnNotifyRequests = field(default=None)
    

@dataclass
class PostV05PatientsSmsOnNotifyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
