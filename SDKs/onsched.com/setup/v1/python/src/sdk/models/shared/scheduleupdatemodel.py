from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import availabilityinputmodel


@dataclass_json
@dataclass
class ScheduleUpdateModel:
    availability: Optional[availabilityinputmodel.AvailabilityInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability' }})
    bookings_per_slot: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingsPerSlot' }})
    interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceGroupId' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
