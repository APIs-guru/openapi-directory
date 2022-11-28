from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RenameVirtualFolderQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    new_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'newName', 'style': 'form', 'explode': True }})
    refresh_library: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'refreshLibrary', 'style': 'form', 'explode': True }})
    

@dataclass
class RenameVirtualFolderSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class RenameVirtualFolderRequest:
    query_params: RenameVirtualFolderQueryParams = field()
    security: RenameVirtualFolderSecurity = field()
    

@dataclass
class RenameVirtualFolderResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
