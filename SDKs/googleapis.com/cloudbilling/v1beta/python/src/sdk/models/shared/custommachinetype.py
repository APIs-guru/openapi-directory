from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomMachineType:
    machine_series: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineSeries' }})
    memory_size_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memorySizeGb' }})
    virtual_cpu_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualCpuCount' }})
    
