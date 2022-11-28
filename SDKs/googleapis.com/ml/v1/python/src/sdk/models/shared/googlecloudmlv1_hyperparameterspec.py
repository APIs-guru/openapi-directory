from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudMlV1HyperparameterSpecAlgorithmEnum(str, Enum):
    ALGORITHM_UNSPECIFIED = "ALGORITHM_UNSPECIFIED"
    GRID_SEARCH = "GRID_SEARCH"
    RANDOM_SEARCH = "RANDOM_SEARCH"

class GoogleCloudMlV1HyperparameterSpecGoalEnum(str, Enum):
    GOAL_TYPE_UNSPECIFIED = "GOAL_TYPE_UNSPECIFIED"
    MAXIMIZE = "MAXIMIZE"
    MINIMIZE = "MINIMIZE"


@dataclass_json
@dataclass
class GoogleCloudMlV1HyperparameterSpec:
    r"""GoogleCloudMlV1HyperparameterSpec
    Represents a set of hyperparameters to optimize.
    """
    
    algorithm: Optional[GoogleCloudMlV1HyperparameterSpecAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    enable_trial_early_stopping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableTrialEarlyStopping') }})
    goal: Optional[GoogleCloudMlV1HyperparameterSpecGoalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goal') }})
    hyperparameter_metric_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperparameterMetricTag') }})
    max_failed_trials: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxFailedTrials') }})
    max_parallel_trials: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxParallelTrials') }})
    max_trials: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxTrials') }})
    params: Optional[List[GoogleCloudMlV1ParameterSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    resume_previous_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resumePreviousJobId') }})
    
