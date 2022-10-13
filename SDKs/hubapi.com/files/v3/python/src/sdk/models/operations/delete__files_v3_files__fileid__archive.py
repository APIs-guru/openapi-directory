from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteFilesV3FilesFileIDArchivePathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFilesV3FilesFileIDArchiveSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class DeleteFilesV3FilesFileIDArchiveSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteFilesV3FilesFileIDArchiveSecurity:
    option1: Optional[DeleteFilesV3FilesFileIDArchiveSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteFilesV3FilesFileIDArchiveSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteFilesV3FilesFileIDArchiveRequest:
    path_params: DeleteFilesV3FilesFileIDArchivePathParams = field(default=None)
    security: DeleteFilesV3FilesFileIDArchiveSecurity = field(default=None)
    

@dataclass
class DeleteFilesV3FilesFileIDArchiveResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
