from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowCxV3beta1ExperimentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    RUNNING = "RUNNING"
    DONE = "DONE"
    ROLLOUT_FAILED = "ROLLOUT_FAILED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Experiment:
    r"""GoogleCloudDialogflowCxV3beta1Experiment
    Represents an experiment in an environment.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    definition: Optional[GoogleCloudDialogflowCxV3beta1ExperimentDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    experiment_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experimentLength') }})
    last_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    result: Optional[GoogleCloudDialogflowCxV3beta1ExperimentResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    rollout_config: Optional[GoogleCloudDialogflowCxV3beta1RolloutConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolloutConfig') }})
    rollout_failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolloutFailureReason') }})
    rollout_state: Optional[GoogleCloudDialogflowCxV3beta1RolloutState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolloutState') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    state: Optional[GoogleCloudDialogflowCxV3beta1ExperimentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    variants_history: Optional[List[GoogleCloudDialogflowCxV3beta1VariantsHistory]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variantsHistory') }})
    
