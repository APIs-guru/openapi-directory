from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetParentPathQueryParams:
    path: str = field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    

@dataclass
class GetParentPathSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetParentPathRequest:
    query_params: GetParentPathQueryParams = field(default=None)
    security: GetParentPathSecurity = field(default=None)
    

@dataclass
class GetParentPathResponse:
    content_type: str = field(default=None)
    get_parent_path_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
