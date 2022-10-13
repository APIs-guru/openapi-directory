from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AppointmentInitialModel:
    booked_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookedBy' }})
    booking_window_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingWindowId' }})
    calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendarId' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerId' }})
    customer_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerMessage' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    end_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    group_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupSize' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    phone_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneType' }})
    resource_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceGroupId' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    resource_ids: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceIds' }})
    service_allocation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAllocationId' }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceId' }})
    start_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timezone_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezoneName' }})
    travel_appointment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travelAppointmentId' }})
    travel_time_mins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travelTimeMins' }})
    
