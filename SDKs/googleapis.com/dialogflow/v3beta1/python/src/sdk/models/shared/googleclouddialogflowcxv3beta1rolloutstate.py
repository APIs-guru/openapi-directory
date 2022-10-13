from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1RolloutState:
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    step: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'step' }})
    step_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stepIndex' }})
    
