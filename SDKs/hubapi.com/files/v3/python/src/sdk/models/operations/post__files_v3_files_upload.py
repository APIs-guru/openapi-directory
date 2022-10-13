from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostFilesV3FilesUploadSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostFilesV3FilesUploadSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostFilesV3FilesUploadSecurity:
    option1: Optional[PostFilesV3FilesUploadSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostFilesV3FilesUploadSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostFilesV3FilesUploadRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PostFilesV3FilesUploadSecurity = field(default=None)
    

@dataclass
class PostFilesV3FilesUploadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    file: Optional[shared.File] = field(default=None)
    status_code: int = field(default=None)
    
