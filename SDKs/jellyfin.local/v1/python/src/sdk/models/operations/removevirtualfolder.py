from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RemoveVirtualFolderQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    refresh_library: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'refreshLibrary', 'style': 'form', 'explode': True }})
    

@dataclass
class RemoveVirtualFolderSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class RemoveVirtualFolderRequest:
    query_params: RemoveVirtualFolderQueryParams = field(default=None)
    security: RemoveVirtualFolderSecurity = field(default=None)
    

@dataclass
class RemoveVirtualFolderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
