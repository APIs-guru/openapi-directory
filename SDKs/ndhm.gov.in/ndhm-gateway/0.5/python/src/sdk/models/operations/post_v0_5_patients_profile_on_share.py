from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05PatientsProfileOnShareHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_cm_id: str = field(metadata={'header': { 'field_name': 'X-CM-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05PatientsProfileOnShareRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    share_profile_result: Optional[shared.ShareProfileResult] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05PatientsProfileOnShareRequest:
    headers: PostV05PatientsProfileOnShareHeaders = field()
    request: PostV05PatientsProfileOnShareRequests = field()
    

@dataclass
class PostV05PatientsProfileOnShareResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
