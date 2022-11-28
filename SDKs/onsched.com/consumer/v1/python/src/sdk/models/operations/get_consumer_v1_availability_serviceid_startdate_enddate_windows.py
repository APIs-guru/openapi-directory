from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsPathParams:
    end_date: datetime = field(metadata={'path_param': { 'field_name': 'endDate', 'style': 'simple', 'explode': False }})
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    start_date: datetime = field(metadata={'path_param': { 'field_name': 'startDate', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsQueryParams:
    destination: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'destination', 'style': 'form', 'explode': True }})
    duration: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'duration', 'style': 'form', 'explode': True }})
    interval: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    resource_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'resourceGroupId', 'style': 'form', 'explode': True }})
    resource_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'resourceId', 'style': 'form', 'explode': True }})
    resource_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'resourceIds', 'style': 'form', 'explode': True }})
    round_robin: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'roundRobin', 'style': 'form', 'explode': True }})
    tz_offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'tzOffset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsRequest:
    path_params: GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsPathParams = field()
    query_params: GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsQueryParams = field()
    

@dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsResponse:
    content_type: str = field()
    status_code: int = field()
    window_availability_view_model: Optional[shared.WindowAvailabilityViewModel] = field(default=None)
    
