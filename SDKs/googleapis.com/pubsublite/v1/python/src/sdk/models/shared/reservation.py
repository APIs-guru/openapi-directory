from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Reservation:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    throughput_capacity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'throughputCapacity' }})
    
