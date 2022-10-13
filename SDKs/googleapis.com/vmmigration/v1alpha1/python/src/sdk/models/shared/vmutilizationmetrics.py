from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VMUtilizationMetrics:
    cpu_average: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuAverage' }})
    cpu_average_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuAveragePercent' }})
    cpu_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuMax' }})
    cpu_max_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuMaxPercent' }})
    disk_io_rate_average: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskIoRateAverage' }})
    disk_io_rate_average_kbps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskIoRateAverageKbps' }})
    disk_io_rate_max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskIoRateMax' }})
    disk_io_rate_max_kbps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskIoRateMaxKbps' }})
    memory_average: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryAverage' }})
    memory_average_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryAveragePercent' }})
    memory_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryMax' }})
    memory_max_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryMaxPercent' }})
    network_throughput_average: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkThroughputAverage' }})
    network_throughput_average_kbps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkThroughputAverageKbps' }})
    network_throughput_max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkThroughputMax' }})
    network_throughput_max_kbps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkThroughputMaxKbps' }})
    
