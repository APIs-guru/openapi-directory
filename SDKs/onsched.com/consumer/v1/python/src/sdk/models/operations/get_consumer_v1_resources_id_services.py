from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetConsumerV1ResourcesIDServicesPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConsumerV1ResourcesIDServicesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConsumerV1ResourcesIDServicesRequest:
    path_params: GetConsumerV1ResourcesIDServicesPathParams = field()
    query_params: GetConsumerV1ResourcesIDServicesQueryParams = field()
    

@dataclass
class GetConsumerV1ResourcesIDServicesResponse:
    content_type: str = field()
    status_code: int = field()
    resource_service_list_view_model: Optional[dict[str, Any]] = field(default=None)
    
