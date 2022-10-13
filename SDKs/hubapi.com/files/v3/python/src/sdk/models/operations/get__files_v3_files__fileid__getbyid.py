from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetFilesV3FilesFileIDGetByIDPathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFilesV3FilesFileIDGetByIDQueryParams:
    properties: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'properties', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFilesV3FilesFileIDGetByIDSecurityOption1:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFilesV3FilesFileIDGetByIDSecurityOption2:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetFilesV3FilesFileIDGetByIDSecurityOption3:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFilesV3FilesFileIDGetByIDSecurity:
    option1: Optional[GetFilesV3FilesFileIDGetByIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetFilesV3FilesFileIDGetByIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetFilesV3FilesFileIDGetByIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetFilesV3FilesFileIDGetByIDRequest:
    path_params: GetFilesV3FilesFileIDGetByIDPathParams = field(default=None)
    query_params: GetFilesV3FilesFileIDGetByIDQueryParams = field(default=None)
    security: GetFilesV3FilesFileIDGetByIDSecurity = field(default=None)
    

@dataclass
class GetFilesV3FilesFileIDGetByIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    file: Optional[shared.File] = field(default=None)
    status_code: int = field(default=None)
    
