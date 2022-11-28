from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BookingWindowUpdateModel:
    from_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromTime') }})
    max_bookings: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxBookings') }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceId') }})
    to_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toTime') }})
    
