from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetFilesV3FoldersFolderPathGetByPathPathParams:
    folder_path: str = field(metadata={'path_param': { 'field_name': 'folderPath', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFilesV3FoldersFolderPathGetByPathQueryParams:
    properties: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'properties', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFilesV3FoldersFolderPathGetByPathSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_legacy1: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    private_apps_legacy1: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFilesV3FoldersFolderPathGetByPathRequest:
    path_params: GetFilesV3FoldersFolderPathGetByPathPathParams = field()
    query_params: GetFilesV3FoldersFolderPathGetByPathQueryParams = field()
    security: GetFilesV3FoldersFolderPathGetByPathSecurity = field()
    

@dataclass
class GetFilesV3FoldersFolderPathGetByPathResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    folder: Optional[shared.Folder] = field(default=None)
    
