from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import computationtopology
from . import datadiskassignment


@dataclass_json
@dataclass
class TopologyConfig:
    computations: Optional[List[computationtopology.ComputationTopology]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computations' }})
    data_disk_assignments: Optional[List[datadiskassignment.DataDiskAssignment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataDiskAssignments' }})
    forwarding_key_bits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwardingKeyBits' }})
    persistent_state_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persistentStateVersion' }})
    user_stage_to_computation_name_map: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userStageToComputationNameMap' }})
    
