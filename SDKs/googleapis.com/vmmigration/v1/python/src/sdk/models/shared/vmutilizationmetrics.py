from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VMUtilizationMetrics:
    cpu_average_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuAveragePercent' }})
    cpu_max_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuMaxPercent' }})
    disk_io_rate_average_kbps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskIoRateAverageKbps' }})
    disk_io_rate_max_kbps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskIoRateMaxKbps' }})
    memory_average_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryAveragePercent' }})
    memory_max_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryMaxPercent' }})
    network_throughput_average_kbps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkThroughputAverageKbps' }})
    network_throughput_max_kbps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkThroughputMaxKbps' }})
    
