from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Availability3ViewModel:
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessName' }})
    first_available_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstAvailableDate' }})
    object_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectName' }})
    resource_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceDescription' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    resource_ids: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceIds' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    service_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceDescription' }})
    service_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceDuration' }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceId' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    tz_requested: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tzRequested' }})
    
