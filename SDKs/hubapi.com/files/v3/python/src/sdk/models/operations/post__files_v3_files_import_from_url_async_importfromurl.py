from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostFilesV3FilesImportFromURLAsyncImportFromURLSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostFilesV3FilesImportFromURLAsyncImportFromURLSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostFilesV3FilesImportFromURLAsyncImportFromURLSecurity:
    option1: Optional[PostFilesV3FilesImportFromURLAsyncImportFromURLSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostFilesV3FilesImportFromURLAsyncImportFromURLSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostFilesV3FilesImportFromURLAsyncImportFromURLRequest:
    request: shared.ImportFromURLInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostFilesV3FilesImportFromURLAsyncImportFromURLSecurity = field(default=None)
    

@dataclass
class PostFilesV3FilesImportFromURLAsyncImportFromURLResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    import_from_url_task_locator: Optional[shared.ImportFromURLTaskLocator] = field(default=None)
    status_code: int = field(default=None)
    
