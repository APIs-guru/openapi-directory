from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CPUInfo:
    cpu_processor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuProcessor' }})
    cpu_speed_in_ghz: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuSpeedInGhz' }})
    number_of_cores: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfCores' }})
    
