from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteFilesV3FoldersFolderPathArchiveByPathPathParams:
    folder_path: str = field(metadata={'path_param': { 'field_name': 'folderPath', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFilesV3FoldersFolderPathArchiveByPathSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteFilesV3FoldersFolderPathArchiveByPathRequest:
    path_params: DeleteFilesV3FoldersFolderPathArchiveByPathPathParams = field()
    security: DeleteFilesV3FoldersFolderPathArchiveByPathSecurity = field()
    

@dataclass
class DeleteFilesV3FoldersFolderPathArchiveByPathResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
