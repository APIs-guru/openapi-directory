from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1experimentdefinition
from . import googleclouddialogflowcxv3beta1experimentresult
from . import googleclouddialogflowcxv3beta1rolloutconfig
from . import googleclouddialogflowcxv3beta1rolloutstate
from . import googleclouddialogflowcxv3beta1variantshistory

class GoogleCloudDialogflowCxV3beta1ExperimentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    RUNNING = "RUNNING"
    DONE = "DONE"
    ROLLOUT_FAILED = "ROLLOUT_FAILED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Experiment:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    definition: Optional[googleclouddialogflowcxv3beta1experimentdefinition.GoogleCloudDialogflowCxV3beta1ExperimentDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definition' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    experiment_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'experimentLength' }})
    last_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    result: Optional[googleclouddialogflowcxv3beta1experimentresult.GoogleCloudDialogflowCxV3beta1ExperimentResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    rollout_config: Optional[googleclouddialogflowcxv3beta1rolloutconfig.GoogleCloudDialogflowCxV3beta1RolloutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolloutConfig' }})
    rollout_failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolloutFailureReason' }})
    rollout_state: Optional[googleclouddialogflowcxv3beta1rolloutstate.GoogleCloudDialogflowCxV3beta1RolloutState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolloutState' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    state: Optional[GoogleCloudDialogflowCxV3beta1ExperimentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    variants_history: Optional[List[googleclouddialogflowcxv3beta1variantshistory.GoogleCloudDialogflowCxV3beta1VariantsHistory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variantsHistory' }})
    
