from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetConsumerV1ServicesQueryParams:
    all_locations: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'allLocations', 'style': 'form', 'explode': True }})
    default_service: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'defaultService', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    scope: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    service_group_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'serviceGroupId', 'style': 'form', 'explode': True }})
    service_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serviceId', 'style': 'form', 'explode': True }})
    sort_descending: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sortDescending', 'style': 'form', 'explode': True }})
    sort_order: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConsumerV1ServicesRequest:
    query_params: GetConsumerV1ServicesQueryParams = field(default=None)
    

@dataclass
class GetConsumerV1ServicesResponse:
    content_type: str = field(default=None)
    service_list_view_model: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
