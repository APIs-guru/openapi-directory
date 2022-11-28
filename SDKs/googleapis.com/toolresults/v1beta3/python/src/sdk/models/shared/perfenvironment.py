from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PerfEnvironment:
    r"""PerfEnvironment
    Encapsulates performance environment info
    """
    
    cpu_info: Optional[CPUInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuInfo') }})
    memory_info: Optional[MemoryInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryInfo') }})
    
