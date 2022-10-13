from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostFilesV3FoldersCreateSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostFilesV3FoldersCreateSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostFilesV3FoldersCreateSecurity:
    option1: Optional[PostFilesV3FoldersCreateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostFilesV3FoldersCreateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostFilesV3FoldersCreateRequest:
    request: shared.FolderInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostFilesV3FoldersCreateSecurity = field(default=None)
    

@dataclass
class PostFilesV3FoldersCreateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    folder: Optional[shared.Folder] = field(default=None)
    status_code: int = field(default=None)
    
