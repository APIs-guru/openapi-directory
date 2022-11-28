from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05UsersAuthFetchModesHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_cm_id: str = field(metadata={'header': { 'field_name': 'X-CM-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05UsersAuthFetchModesRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_auth_mode_query_request: Optional[shared.PatientAuthModeQueryRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05UsersAuthFetchModesRequest:
    headers: PostV05UsersAuthFetchModesHeaders = field()
    request: PostV05UsersAuthFetchModesRequests = field()
    

@dataclass
class PostV05UsersAuthFetchModesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
