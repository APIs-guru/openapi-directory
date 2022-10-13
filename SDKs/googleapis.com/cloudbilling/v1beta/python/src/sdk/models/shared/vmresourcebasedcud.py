from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import guestaccelerator

class VMResourceBasedCudPlanEnum(str, Enum):
    COMMITMENT_PLAN_UNSPECIFIED = "COMMITMENT_PLAN_UNSPECIFIED"
    TWELVE_MONTH = "TWELVE_MONTH"
    THIRTY_SIX_MONTH = "THIRTY_SIX_MONTH"


@dataclass_json
@dataclass
class VMResourceBasedCud:
    guest_accelerator: Optional[guestaccelerator.GuestAccelerator] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guestAccelerator' }})
    machine_series: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineSeries' }})
    memory_size_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memorySizeGb' }})
    plan: Optional[VMResourceBasedCudPlanEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    virtual_cpu_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualCpuCount' }})
    
