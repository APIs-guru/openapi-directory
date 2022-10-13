from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleAdsHomeservicesLocalservicesV1BookingLead:
    booking_appointment_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingAppointmentTimestamp' }})
    consumer_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerEmail' }})
    consumer_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerPhoneNumber' }})
    customer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerName' }})
    job_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobType' }})
    
