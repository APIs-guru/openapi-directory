from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BlueGreenSettings:
    r"""BlueGreenSettings
    Settings for blue-green upgrade.
    """
    
    node_pool_soak_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePoolSoakDuration') }})
    standard_rollout_policy: Optional[StandardRolloutPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardRolloutPolicy') }})
    
