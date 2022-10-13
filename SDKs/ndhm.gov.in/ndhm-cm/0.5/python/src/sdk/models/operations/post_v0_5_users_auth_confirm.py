from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05UsersAuthConfirmHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PostV05UsersAuthConfirmRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    patient_auth_confirm_request: Optional[shared.PatientAuthConfirmRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05UsersAuthConfirmRequest:
    headers: PostV05UsersAuthConfirmHeaders = field(default=None)
    request: PostV05UsersAuthConfirmRequests = field(default=None)
    

@dataclass
class PostV05UsersAuthConfirmResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
