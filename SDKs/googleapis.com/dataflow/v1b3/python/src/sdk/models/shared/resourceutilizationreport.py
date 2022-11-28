from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceUtilizationReport:
    r"""ResourceUtilizationReport
    Worker metrics exported from workers. This contains resource utilization metrics accumulated from a variety of sources. For more information, see go/df-resource-signals.
    """
    
    containers: Optional[dict[str, ResourceUtilizationReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    cpu_time: Optional[List[CPUTime]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuTime') }})
    memory_info: Optional[List[MemInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryInfo') }})
    
