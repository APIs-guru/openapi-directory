from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetFilesV3FoldersFolderIDGetByIDPathParams:
    folder_id: str = field(metadata={'path_param': { 'field_name': 'folderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFilesV3FoldersFolderIDGetByIDQueryParams:
    properties: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'properties', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFilesV3FoldersFolderIDGetByIDSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_legacy1: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    private_apps_legacy1: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFilesV3FoldersFolderIDGetByIDRequest:
    path_params: GetFilesV3FoldersFolderIDGetByIDPathParams = field()
    query_params: GetFilesV3FoldersFolderIDGetByIDQueryParams = field()
    security: GetFilesV3FoldersFolderIDGetByIDSecurity = field()
    

@dataclass
class GetFilesV3FoldersFolderIDGetByIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    folder: Optional[shared.Folder] = field(default=None)
    
