from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetParentPathQueryParams:
    path: str = field(metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    

@dataclass
class GetParentPathSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetParentPathRequest:
    query_params: GetParentPathQueryParams = field()
    security: GetParentPathSecurity = field()
    

@dataclass
class GetParentPathResponse:
    content_type: str = field()
    status_code: int = field()
    get_parent_path_200_application_json_string: Optional[str] = field(default=None)
    
