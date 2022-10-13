from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WorkerConfig:
    disk_size_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSizeGb' }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineType' }})
    
