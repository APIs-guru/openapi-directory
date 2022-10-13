from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchFilesV3FilesFileIDUpdatePropertiesPathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchFilesV3FilesFileIDUpdatePropertiesSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PatchFilesV3FilesFileIDUpdatePropertiesSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PatchFilesV3FilesFileIDUpdatePropertiesSecurity:
    option1: Optional[PatchFilesV3FilesFileIDUpdatePropertiesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PatchFilesV3FilesFileIDUpdatePropertiesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PatchFilesV3FilesFileIDUpdatePropertiesRequest:
    path_params: PatchFilesV3FilesFileIDUpdatePropertiesPathParams = field(default=None)
    request: shared.FileUpdateInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchFilesV3FilesFileIDUpdatePropertiesSecurity = field(default=None)
    

@dataclass
class PatchFilesV3FilesFileIDUpdatePropertiesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    file: Optional[shared.File] = field(default=None)
    status_code: int = field(default=None)
    
