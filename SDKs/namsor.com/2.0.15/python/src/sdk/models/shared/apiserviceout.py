from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIServiceOut:
    cost_in_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costInUnits' }})
    service_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceGroup' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    
