from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromemanagementv1cputemperatureinfo


@dataclass_json
@dataclass
class GoogleChromeManagementV1CPUStatusReport:
    cpu_temperature_info: Optional[List[googlechromemanagementv1cputemperatureinfo.GoogleChromeManagementV1CPUTemperatureInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuTemperatureInfo' }})
    cpu_utilization_pct: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuUtilizationPct' }})
    report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTime' }})
    sample_frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleFrequency' }})
    
