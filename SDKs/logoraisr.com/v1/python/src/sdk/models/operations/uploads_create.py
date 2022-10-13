from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UploadsCreateRequestBodyFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class UploadsCreateRequestBody:
    file: UploadsCreateRequestBodyFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class UploadsCreateRequest:
    request: UploadsCreateRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UploadsCreateResponse:
    content_type: str = field(default=None)
    file_response: Optional[shared.FileResponse] = field(default=None)
    status_code: int = field(default=None)
    
