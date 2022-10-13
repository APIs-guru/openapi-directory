from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourceutilizationreport
from . import cputime
from . import meminfo


@dataclass_json
@dataclass
class ResourceUtilizationReport:
    containers: Optional[dict[str, resourceutilizationreport.ResourceUtilizationReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containers' }})
    cpu_time: Optional[List[cputime.CPUTime]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuTime' }})
    memory_info: Optional[List[meminfo.MemInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryInfo' }})
    
