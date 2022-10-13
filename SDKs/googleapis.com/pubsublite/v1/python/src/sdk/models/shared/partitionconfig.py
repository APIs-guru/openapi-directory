from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import capacity


@dataclass_json
@dataclass
class PartitionConfig:
    capacity: Optional[capacity.Capacity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacity' }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    scale: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scale' }})
    
