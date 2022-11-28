from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostFilesV3FoldersUpdateAsyncUpdatePropertiesRequest:
    request: shared.FolderUpdateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurity = field()
    

@dataclass
class PostFilesV3FoldersUpdateAsyncUpdatePropertiesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    folder_update_task_locator: Optional[shared.FolderUpdateTaskLocator] = field(default=None)
    
