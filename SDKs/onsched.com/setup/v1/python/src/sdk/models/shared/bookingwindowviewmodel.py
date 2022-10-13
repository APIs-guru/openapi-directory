from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BookingWindowViewModel:
    from_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromTime' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    max_bookings: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxBookings' }})
    object_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectName' }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceId' }})
    to_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toTime' }})
    
