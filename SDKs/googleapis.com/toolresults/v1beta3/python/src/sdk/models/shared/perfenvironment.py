from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cpuinfo
from . import memoryinfo


@dataclass_json
@dataclass
class PerfEnvironment:
    cpu_info: Optional[cpuinfo.CPUInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuInfo' }})
    memory_info: Optional[memoryinfo.MemoryInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryInfo' }})
    
