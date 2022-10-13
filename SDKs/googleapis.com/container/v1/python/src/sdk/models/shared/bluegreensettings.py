from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import standardrolloutpolicy


@dataclass_json
@dataclass
class BlueGreenSettings:
    node_pool_soak_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodePoolSoakDuration' }})
    standard_rollout_policy: Optional[standardrolloutpolicy.StandardRolloutPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standardRolloutPolicy' }})
    
