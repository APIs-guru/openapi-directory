from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetConsumerV1ServicegroupsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConsumerV1ServicegroupsRequest:
    query_params: GetConsumerV1ServicegroupsQueryParams = field(default=None)
    

@dataclass
class GetConsumerV1ServicegroupsResponse:
    content_type: str = field(default=None)
    service_group_list_view_model: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
