from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDatePathParams:
    end_date: datetime = field(metadata={'path_param': { 'field_name': 'endDate', 'style': 'simple', 'explode': False }})
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    start_date: datetime = field(metadata={'path_param': { 'field_name': 'startDate', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateQueryParams:
    day_availability: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'dayAvailability', 'style': 'form', 'explode': True }})
    day_availability_start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'dayAvailabilityStartDate', 'style': 'form', 'explode': True }})
    destination: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'destination', 'style': 'form', 'explode': True }})
    duration: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'duration', 'style': 'form', 'explode': True }})
    end_time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    first_day_available: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'firstDayAvailable', 'style': 'form', 'explode': True }})
    full_server_based_availability: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'fullServerBasedAvailability', 'style': 'form', 'explode': True }})
    interval: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    resource_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'resourceGroupId', 'style': 'form', 'explode': True }})
    resource_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'resourceId', 'style': 'form', 'explode': True }})
    resource_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'resourceIds', 'style': 'form', 'explode': True }})
    round_robin: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'roundRobin', 'style': 'form', 'explode': True }})
    start_time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    tz_offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'tzOffset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateRequest:
    path_params: GetConsumerV1AvailabilityServiceIDStartDateEndDatePathParams = field()
    query_params: GetConsumerV1AvailabilityServiceIDStartDateEndDateQueryParams = field()
    

@dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateResponse:
    content_type: str = field()
    status_code: int = field()
    availability_view_model: Optional[shared.AvailabilityViewModel] = field(default=None)
    
