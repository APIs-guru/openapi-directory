from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3experimentdefinition
from . import googleclouddialogflowcxv3experimentresult
from . import googleclouddialogflowcxv3rolloutconfig
from . import googleclouddialogflowcxv3rolloutstate
from . import googleclouddialogflowcxv3variantshistory

class GoogleCloudDialogflowCxV3ExperimentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    RUNNING = "RUNNING"
    DONE = "DONE"
    ROLLOUT_FAILED = "ROLLOUT_FAILED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3Experiment:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    definition: Optional[googleclouddialogflowcxv3experimentdefinition.GoogleCloudDialogflowCxV3ExperimentDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definition' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    experiment_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'experimentLength' }})
    last_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    result: Optional[googleclouddialogflowcxv3experimentresult.GoogleCloudDialogflowCxV3ExperimentResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    rollout_config: Optional[googleclouddialogflowcxv3rolloutconfig.GoogleCloudDialogflowCxV3RolloutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolloutConfig' }})
    rollout_failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolloutFailureReason' }})
    rollout_state: Optional[googleclouddialogflowcxv3rolloutstate.GoogleCloudDialogflowCxV3RolloutState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolloutState' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    state: Optional[GoogleCloudDialogflowCxV3ExperimentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    variants_history: Optional[List[googleclouddialogflowcxv3variantshistory.GoogleCloudDialogflowCxV3VariantsHistory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variantsHistory' }})
    
