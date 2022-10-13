from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ServiceCalendarViewModel:
    calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendarId' }})
    calendar_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendarName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceId' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    
