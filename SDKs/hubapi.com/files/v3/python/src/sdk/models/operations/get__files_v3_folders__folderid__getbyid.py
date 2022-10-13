from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetFilesV3FoldersFolderIDGetByIDPathParams:
    folder_id: str = field(default=None, metadata={'path_param': { 'field_name': 'folderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFilesV3FoldersFolderIDGetByIDQueryParams:
    properties: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'properties', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFilesV3FoldersFolderIDGetByIDSecurityOption1:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFilesV3FoldersFolderIDGetByIDSecurityOption2:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetFilesV3FoldersFolderIDGetByIDSecurityOption3:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFilesV3FoldersFolderIDGetByIDSecurity:
    option1: Optional[GetFilesV3FoldersFolderIDGetByIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetFilesV3FoldersFolderIDGetByIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetFilesV3FoldersFolderIDGetByIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetFilesV3FoldersFolderIDGetByIDRequest:
    path_params: GetFilesV3FoldersFolderIDGetByIDPathParams = field(default=None)
    query_params: GetFilesV3FoldersFolderIDGetByIDQueryParams = field(default=None)
    security: GetFilesV3FoldersFolderIDGetByIDSecurity = field(default=None)
    

@dataclass
class GetFilesV3FoldersFolderIDGetByIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    folder: Optional[shared.Folder] = field(default=None)
    status_code: int = field(default=None)
    
