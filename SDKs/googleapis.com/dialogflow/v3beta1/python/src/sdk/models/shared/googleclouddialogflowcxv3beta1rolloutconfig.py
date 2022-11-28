from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1RolloutConfig:
    r"""GoogleCloudDialogflowCxV3beta1RolloutConfig
    The configuration for auto rollout.
    """
    
    failure_condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCondition') }})
    rollout_condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolloutCondition') }})
    rollout_steps: Optional[List[GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolloutSteps') }})
    
