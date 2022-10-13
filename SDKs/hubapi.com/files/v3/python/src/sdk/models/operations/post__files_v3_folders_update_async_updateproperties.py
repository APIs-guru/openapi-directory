from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurity:
    option1: Optional[PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostFilesV3FoldersUpdateAsyncUpdatePropertiesRequest:
    request: shared.FolderUpdateInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurity = field(default=None)
    

@dataclass
class PostFilesV3FoldersUpdateAsyncUpdatePropertiesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    folder_update_task_locator: Optional[shared.FolderUpdateTaskLocator] = field(default=None)
    status_code: int = field(default=None)
    
