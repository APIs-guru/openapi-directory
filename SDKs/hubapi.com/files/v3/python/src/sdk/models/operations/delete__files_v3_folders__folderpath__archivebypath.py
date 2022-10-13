from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteFilesV3FoldersFolderPathArchiveByPathPathParams:
    folder_path: str = field(default=None, metadata={'path_param': { 'field_name': 'folderPath', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFilesV3FoldersFolderPathArchiveByPathSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class DeleteFilesV3FoldersFolderPathArchiveByPathSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteFilesV3FoldersFolderPathArchiveByPathSecurity:
    option1: Optional[DeleteFilesV3FoldersFolderPathArchiveByPathSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteFilesV3FoldersFolderPathArchiveByPathSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteFilesV3FoldersFolderPathArchiveByPathRequest:
    path_params: DeleteFilesV3FoldersFolderPathArchiveByPathPathParams = field(default=None)
    security: DeleteFilesV3FoldersFolderPathArchiveByPathSecurity = field(default=None)
    

@dataclass
class DeleteFilesV3FoldersFolderPathArchiveByPathResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
