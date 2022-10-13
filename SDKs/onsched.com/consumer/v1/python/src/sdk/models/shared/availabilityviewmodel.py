from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AvailabilityViewModel:
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessName' }})
    calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendarId' }})
    calendar_resource_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendarResourceGroupId' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    first_available_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstAvailableDate' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    object_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectName' }})
    resource_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceDescription' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    resource_ids: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceIds' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    service_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceDescription' }})
    service_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceDuration' }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceId' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    tz_requested: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tzRequested' }})
    
