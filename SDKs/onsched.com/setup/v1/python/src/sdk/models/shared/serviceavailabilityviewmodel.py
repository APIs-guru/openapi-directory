from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ServiceAvailabilityViewModel:
    ignore_business_hours: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreBusinessHours' }})
    service_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceId' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    
