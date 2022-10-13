from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSetupV1LocationsIDServicesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1LocationsIDServicesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetupV1LocationsIDServicesRequest:
    path_params: GetSetupV1LocationsIDServicesPathParams = field(default=None)
    query_params: GetSetupV1LocationsIDServicesQueryParams = field(default=None)
    

@dataclass
class GetSetupV1LocationsIDServicesResponse:
    business_service_list_view_model: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
