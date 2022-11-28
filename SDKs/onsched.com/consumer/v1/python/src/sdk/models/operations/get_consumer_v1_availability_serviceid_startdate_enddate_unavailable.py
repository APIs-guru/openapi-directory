from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailablePathParams:
    end_date: datetime = field(metadata={'path_param': { 'field_name': 'endDate', 'style': 'simple', 'explode': False }})
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    start_date: datetime = field(metadata={'path_param': { 'field_name': 'startDate', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableQueryParams:
    duration: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'duration', 'style': 'form', 'explode': True }})
    full_server_based_availability: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'fullServerBasedAvailability', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    resource_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'resourceId', 'style': 'form', 'explode': True }})
    tz_offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'tzOffset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableRequest:
    path_params: GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailablePathParams = field()
    query_params: GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableQueryParams = field()
    

@dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableResponse:
    content_type: str = field()
    status_code: int = field()
    unavailable_time_list_view_model: Optional[dict[str, Any]] = field(default=None)
    
