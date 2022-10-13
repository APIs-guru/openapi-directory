from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3rolloutconfigrolloutstep


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3RolloutConfig:
    failure_condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCondition' }})
    rollout_condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolloutCondition' }})
    rollout_steps: Optional[List[googleclouddialogflowcxv3rolloutconfigrolloutstep.GoogleCloudDialogflowCxV3RolloutConfigRolloutStep]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolloutSteps' }})
    
