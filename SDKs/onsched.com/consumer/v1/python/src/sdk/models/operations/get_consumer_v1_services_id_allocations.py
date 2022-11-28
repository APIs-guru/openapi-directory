from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class GetConsumerV1ServicesIDAllocationsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConsumerV1ServicesIDAllocationsQueryParams:
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    resource_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'resourceId', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConsumerV1ServicesIDAllocationsRequest:
    path_params: GetConsumerV1ServicesIDAllocationsPathParams = field()
    query_params: GetConsumerV1ServicesIDAllocationsQueryParams = field()
    

@dataclass
class GetConsumerV1ServicesIDAllocationsResponse:
    content_type: str = field()
    status_code: int = field()
    service_allocation_list_view_model: Optional[dict[str, Any]] = field(default=None)
    
