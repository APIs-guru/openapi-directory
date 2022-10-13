from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MeteringMembershipState:
    last_measurement_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastMeasurementTime' }})
    precise_last_measured_cluster_vcpu_capacity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preciseLastMeasuredClusterVcpuCapacity' }})
    
