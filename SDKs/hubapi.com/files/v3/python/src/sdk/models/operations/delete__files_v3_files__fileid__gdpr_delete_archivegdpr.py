from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprPathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprSecurity:
    option1: Optional[DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprRequest:
    path_params: DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprPathParams = field(default=None)
    security: DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprSecurity = field(default=None)
    

@dataclass
class DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
