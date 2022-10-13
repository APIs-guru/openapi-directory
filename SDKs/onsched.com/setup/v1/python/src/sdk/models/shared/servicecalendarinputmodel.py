from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ServiceCalendarInputModel:
    calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendarId' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceId' }})
    
