from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ServiceViewModel:
    book_ahead_unit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookAheadUnit' }})
    book_ahead_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookAheadValue' }})
    book_in_advance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookInAdvance' }})
    booking_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingInterval' }})
    booking_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingLimit' }})
    calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendarId' }})
    calendar_resource_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendarResourceGroupId' }})
    cancellation_fee_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellationFeeAmount' }})
    cancellation_fee_taxable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellationFeeTaxable' }})
    company_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyId' }})
    consumer_padding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerPadding' }})
    daily_booking_limit_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dailyBookingLimitCount' }})
    daily_booking_limit_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dailyBookingLimitMinutes' }})
    default_service: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultService' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    duration_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationInterval' }})
    duration_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationMax' }})
    duration_min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationMin' }})
    duration_select: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationSelect' }})
    fee_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feeAmount' }})
    fee_taxable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feeTaxable' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUrl' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    max_booking_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxBookingLimit' }})
    max_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxCapacity' }})
    max_group_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxGroupSize' }})
    max_resource_booking_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResourceBookingLimit' }})
    media_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaPageUrl' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    non_refundable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonRefundable' }})
    object_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectName' }})
    padding: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'padding' }})
    round_robin: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roundRobin' }})
    service_group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceGroupId' }})
    service_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceGroupName' }})
    show_online: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showOnline' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
