from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TopologyConfig:
    r"""TopologyConfig
    Global topology of the streaming Dataflow job, including all computations and their sharded locations.
    """
    
    computations: Optional[List[ComputationTopology]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computations') }})
    data_disk_assignments: Optional[List[DataDiskAssignment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDiskAssignments') }})
    forwarding_key_bits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardingKeyBits') }})
    persistent_state_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistentStateVersion') }})
    user_stage_to_computation_name_map: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userStageToComputationNameMap') }})
    
