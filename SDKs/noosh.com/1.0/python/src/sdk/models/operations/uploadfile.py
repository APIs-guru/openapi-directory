from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UploadFilePathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadFileRequestBody:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    request_body: str = field(metadata={'multipart_form': { 'field_name': 'requestBody' }})
    

@dataclass
class UploadFileRequest:
    path_params: UploadFilePathParams = field()
    request: Optional[UploadFileRequestBody] = field(default=None, metadata={'multipart_form': { 'file': True }, 'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UploadFileResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    file_response_vo: Optional[Any] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    
