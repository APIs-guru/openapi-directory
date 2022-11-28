from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3RolloutState:
    r"""GoogleCloudDialogflowCxV3RolloutState
    State of the auto-rollout process.
    """
    
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    step: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('step') }})
    step_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepIndex') }})
    
