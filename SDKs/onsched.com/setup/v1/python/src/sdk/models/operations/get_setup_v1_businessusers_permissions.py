from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSetupV1BusinessusersPermissionsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    role: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetupV1BusinessusersPermissionsRequest:
    query_params: GetSetupV1BusinessusersPermissionsQueryParams = field(default=None)
    

@dataclass
class GetSetupV1BusinessusersPermissionsResponse:
    business_permission_list_view_model: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
