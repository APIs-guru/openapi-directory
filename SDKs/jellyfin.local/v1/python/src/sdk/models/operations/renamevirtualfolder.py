from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RenameVirtualFolderQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    new_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'newName', 'style': 'form', 'explode': True }})
    refresh_library: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'refreshLibrary', 'style': 'form', 'explode': True }})
    

@dataclass
class RenameVirtualFolderSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class RenameVirtualFolderRequest:
    query_params: RenameVirtualFolderQueryParams = field(default=None)
    security: RenameVirtualFolderSecurity = field(default=None)
    

@dataclass
class RenameVirtualFolderResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
