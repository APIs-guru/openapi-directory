from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetConsumerV1ResourcesIDServicesPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConsumerV1ResourcesIDServicesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConsumerV1ResourcesIDServicesRequest:
    path_params: GetConsumerV1ResourcesIDServicesPathParams = field(default=None)
    query_params: GetConsumerV1ResourcesIDServicesQueryParams = field(default=None)
    

@dataclass
class GetConsumerV1ResourcesIDServicesResponse:
    content_type: str = field(default=None)
    resource_service_list_view_model: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
