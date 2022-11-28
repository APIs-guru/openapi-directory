from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetConsumerV1CustomersQueryParams:
    deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'deleted', 'style': 'form', 'explode': True }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    lastname: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lastname', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConsumerV1CustomersRequest:
    query_params: GetConsumerV1CustomersQueryParams = field()
    

@dataclass
class GetConsumerV1CustomersResponse:
    content_type: str = field()
    status_code: int = field()
    customer_list_view_model: Optional[dict[str, Any]] = field(default=None)
    
