from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetFilesV3FoldersFolderPathGetByPathPathParams:
    folder_path: str = field(default=None, metadata={'path_param': { 'field_name': 'folderPath', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFilesV3FoldersFolderPathGetByPathQueryParams:
    properties: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'properties', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFilesV3FoldersFolderPathGetByPathSecurityOption1:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFilesV3FoldersFolderPathGetByPathSecurityOption2:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetFilesV3FoldersFolderPathGetByPathSecurityOption3:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFilesV3FoldersFolderPathGetByPathSecurity:
    option1: Optional[GetFilesV3FoldersFolderPathGetByPathSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetFilesV3FoldersFolderPathGetByPathSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetFilesV3FoldersFolderPathGetByPathSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetFilesV3FoldersFolderPathGetByPathRequest:
    path_params: GetFilesV3FoldersFolderPathGetByPathPathParams = field(default=None)
    query_params: GetFilesV3FoldersFolderPathGetByPathQueryParams = field(default=None)
    security: GetFilesV3FoldersFolderPathGetByPathSecurity = field(default=None)
    

@dataclass
class GetFilesV3FoldersFolderPathGetByPathResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    folder: Optional[shared.Folder] = field(default=None)
    status_code: int = field(default=None)
    
