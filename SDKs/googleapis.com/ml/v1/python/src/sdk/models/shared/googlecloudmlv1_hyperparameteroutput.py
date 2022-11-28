from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudMlV1HyperparameterOutputStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    QUEUED = "QUEUED"
    PREPARING = "PREPARING"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    CANCELLING = "CANCELLING"
    CANCELLED = "CANCELLED"


@dataclass_json
@dataclass
class GoogleCloudMlV1HyperparameterOutput:
    r"""GoogleCloudMlV1HyperparameterOutput
    Represents the result of a single hyperparameter tuning trial from a training job. The TrainingOutput object that is returned on successful completion of a training job with hyperparameter tuning includes a list of HyperparameterOutput objects, one for each successful trial.
    """
    
    all_metrics: Optional[List[GoogleCloudMlV1HyperparameterOutputHyperparameterMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allMetrics') }})
    built_in_algorithm_output: Optional[GoogleCloudMlV1BuiltInAlgorithmOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builtInAlgorithmOutput') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    final_metric: Optional[GoogleCloudMlV1HyperparameterOutputHyperparameterMetric] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalMetric') }})
    hyperparameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperparameters') }})
    is_trial_stopped_early: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isTrialStoppedEarly') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    state: Optional[GoogleCloudMlV1HyperparameterOutputStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    trial_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialId') }})
    web_access_uris: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webAccessUris') }})
    
