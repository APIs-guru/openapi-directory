from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSetupV1LocationsIDServicesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1LocationsIDServicesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetupV1LocationsIDServicesRequest:
    path_params: GetSetupV1LocationsIDServicesPathParams = field()
    query_params: GetSetupV1LocationsIDServicesQueryParams = field()
    

@dataclass
class GetSetupV1LocationsIDServicesResponse:
    content_type: str = field()
    status_code: int = field()
    business_service_list_view_model: Optional[dict[str, Any]] = field(default=None)
    
