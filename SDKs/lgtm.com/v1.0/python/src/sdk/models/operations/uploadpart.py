from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UploadPartPathParams:
    session_id: str = field(metadata={'path_param': { 'field_name': 'session-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadPartRequests:
    application_octet_stream: bytes = field(metadata={'request': { 'media_type': 'application/octet-stream' }})
    application_zip: bytes = field(metadata={'request': { 'media_type': 'application/zip' }})
    

@dataclass
class UploadPartSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UploadPartRequest:
    path_params: UploadPartPathParams = field()
    request: UploadPartRequests = field()
    security: UploadPartSecurity = field()
    

@dataclass
class UploadPartResponse:
    content_type: str = field()
    status_code: int = field()
    
