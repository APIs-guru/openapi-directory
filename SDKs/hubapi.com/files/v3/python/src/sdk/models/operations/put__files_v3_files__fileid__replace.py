from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutFilesV3FilesFileIDReplacePathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutFilesV3FilesFileIDReplaceSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PutFilesV3FilesFileIDReplaceSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutFilesV3FilesFileIDReplaceSecurity:
    option1: Optional[PutFilesV3FilesFileIDReplaceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PutFilesV3FilesFileIDReplaceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PutFilesV3FilesFileIDReplaceRequest:
    path_params: PutFilesV3FilesFileIDReplacePathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PutFilesV3FilesFileIDReplaceSecurity = field(default=None)
    

@dataclass
class PutFilesV3FilesFileIDReplaceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    file: Optional[shared.File] = field(default=None)
    status_code: int = field(default=None)
    
