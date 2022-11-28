from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomMachineType:
    r"""CustomMachineType
    Specification of a custom machine type.
    """
    
    machine_series: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineSeries') }})
    memory_size_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memorySizeGb') }})
    virtual_cpu_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualCpuCount') }})
    
