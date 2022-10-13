from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetConsumerV1ServicesIDResourcesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConsumerV1ServicesIDResourcesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConsumerV1ServicesIDResourcesRequest:
    path_params: GetConsumerV1ServicesIDResourcesPathParams = field(default=None)
    query_params: GetConsumerV1ServicesIDResourcesQueryParams = field(default=None)
    

@dataclass
class GetConsumerV1ServicesIDResourcesResponse:
    content_type: str = field(default=None)
    resource_list_view_model: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
