from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NodeConfig:
    cpu_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuCount' }})
    memory_size_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memorySizeMb' }})
    
