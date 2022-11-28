from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostFilesV3FilesImportFromURLAsyncImportFromURLSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostFilesV3FilesImportFromURLAsyncImportFromURLRequest:
    request: shared.ImportFromURLInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostFilesV3FilesImportFromURLAsyncImportFromURLSecurity = field()
    

@dataclass
class PostFilesV3FilesImportFromURLAsyncImportFromURLResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    import_from_url_task_locator: Optional[shared.ImportFromURLTaskLocator] = field(default=None)
    
