from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteFilesV3FoldersFolderIDArchivePathParams:
    folder_id: str = field(default=None, metadata={'path_param': { 'field_name': 'folderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFilesV3FoldersFolderIDArchiveSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class DeleteFilesV3FoldersFolderIDArchiveSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteFilesV3FoldersFolderIDArchiveSecurity:
    option1: Optional[DeleteFilesV3FoldersFolderIDArchiveSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteFilesV3FoldersFolderIDArchiveSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteFilesV3FoldersFolderIDArchiveRequest:
    path_params: DeleteFilesV3FoldersFolderIDArchivePathParams = field(default=None)
    security: DeleteFilesV3FoldersFolderIDArchiveSecurity = field(default=None)
    

@dataclass
class DeleteFilesV3FoldersFolderIDArchiveResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
