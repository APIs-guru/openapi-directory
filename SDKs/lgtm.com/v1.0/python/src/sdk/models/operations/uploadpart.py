from dataclasses import dataclass, field



@dataclass
class UploadPartPathParams:
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'session-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadPartRequests:
    application_octet_stream: bytes = field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    application_zip: bytes = field(default=None, metadata={'request': { 'media_type': 'application/zip' }})
    

@dataclass
class UploadPartSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UploadPartRequest:
    path_params: UploadPartPathParams = field(default=None)
    request: UploadPartRequests = field(default=None)
    security: UploadPartSecurity = field(default=None)
    

@dataclass
class UploadPartResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
