from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysPathParams:
    end_date: datetime = field(metadata={'path_param': { 'field_name': 'endDate', 'style': 'simple', 'explode': False }})
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    start_date: datetime = field(metadata={'path_param': { 'field_name': 'startDate', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysQueryParams:
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    resource_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'resourceId', 'style': 'form', 'explode': True }})
    tz_offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'tzOffset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysRequest:
    path_params: GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysPathParams = field()
    query_params: GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysQueryParams = field()
    

@dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysResponse:
    content_type: str = field()
    status_code: int = field()
    availability_day_view_model: Optional[shared.AvailabilityDayViewModel] = field(default=None)
    
