from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05UsersAuthOnFetchModesHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = field(metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05UsersAuthOnFetchModesRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_auth_mode_query_response: Optional[shared.PatientAuthModeQueryResponse] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05UsersAuthOnFetchModesRequest:
    headers: PostV05UsersAuthOnFetchModesHeaders = field()
    request: PostV05UsersAuthOnFetchModesRequests = field()
    

@dataclass
class PostV05UsersAuthOnFetchModesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
