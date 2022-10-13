from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Outage:
    descriptor_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descriptorId' }})
    descriptor_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descriptorName' }})
    duration: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    until: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'until' }})
    
