from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddVirtualFolderQueryParams:
    collection_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'collectionType', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    paths: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'paths', 'style': 'form', 'explode': True }})
    refresh_library: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'refreshLibrary', 'style': 'form', 'explode': True }})
    

@dataclass
class AddVirtualFolderRequests:
    add_virtual_folder_dto: Optional[shared.AddVirtualFolderDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    add_virtual_folder_dto1: Optional[shared.AddVirtualFolderDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    add_virtual_folder_dto2: Optional[shared.AddVirtualFolderDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AddVirtualFolderSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddVirtualFolderRequest:
    query_params: AddVirtualFolderQueryParams = field(default=None)
    request: Optional[AddVirtualFolderRequests] = field(default=None)
    security: AddVirtualFolderSecurity = field(default=None)
    

@dataclass
class AddVirtualFolderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
