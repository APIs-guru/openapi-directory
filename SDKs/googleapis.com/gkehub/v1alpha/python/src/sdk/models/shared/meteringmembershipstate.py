from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MeteringMembershipState:
    r"""MeteringMembershipState
    **Metering**: Per-Membership Feature State.
    """
    
    last_measurement_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastMeasurementTime') }})
    precise_last_measured_cluster_vcpu_capacity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preciseLastMeasuredClusterVcpuCapacity') }})
    
