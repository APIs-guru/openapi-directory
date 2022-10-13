from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetConsumerV1ResourcesQueryParams:
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    resource_group_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'resourceGroupId', 'style': 'form', 'explode': True }})
    sort_order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConsumerV1ResourcesRequest:
    query_params: GetConsumerV1ResourcesQueryParams = field(default=None)
    

@dataclass
class GetConsumerV1ResourcesResponse:
    content_type: str = field(default=None)
    resource_list_view_model: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
