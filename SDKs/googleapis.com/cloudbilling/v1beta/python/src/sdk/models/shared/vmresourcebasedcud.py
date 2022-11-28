from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VMResourceBasedCudPlanEnum(str, Enum):
    COMMITMENT_PLAN_UNSPECIFIED = "COMMITMENT_PLAN_UNSPECIFIED"
    TWELVE_MONTH = "TWELVE_MONTH"
    THIRTY_SIX_MONTH = "THIRTY_SIX_MONTH"


@dataclass_json
@dataclass
class VMResourceBasedCud:
    r"""VMResourceBasedCud
    Specifies a resource-based committed use discount (CUD).
    """
    
    guest_accelerator: Optional[GuestAccelerator] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestAccelerator') }})
    machine_series: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineSeries') }})
    memory_size_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memorySizeGb') }})
    plan: Optional[VMResourceBasedCudPlanEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    virtual_cpu_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualCpuCount') }})
    
