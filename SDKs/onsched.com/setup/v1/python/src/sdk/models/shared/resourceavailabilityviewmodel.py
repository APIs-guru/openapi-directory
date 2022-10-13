from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResourceAvailabilityViewModel:
    business_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessId' }})
    ignore_business_hours: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreBusinessHours' }})
    resource_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    resource_tzo: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceTzo' }})
    
