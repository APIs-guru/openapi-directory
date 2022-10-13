from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05UsersAuthFetchModesHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PostV05UsersAuthFetchModesRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    patient_auth_mode_query_request: Optional[shared.PatientAuthModeQueryRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05UsersAuthFetchModesRequest:
    headers: PostV05UsersAuthFetchModesHeaders = field(default=None)
    request: PostV05UsersAuthFetchModesRequests = field(default=None)
    

@dataclass
class PostV05UsersAuthFetchModesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
