from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__parameterspec

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
    algorithm: Optional[GoogleCloudMlV1HyperparameterSpecAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    enable_trial_early_stopping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableTrialEarlyStopping' }})
    goal: Optional[GoogleCloudMlV1HyperparameterSpecGoalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goal' }})
    hyperparameter_metric_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hyperparameterMetricTag' }})
    max_failed_trials: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxFailedTrials' }})
    max_parallel_trials: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxParallelTrials' }})
    max_trials: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxTrials' }})
    params: Optional[List[googlecloudmlv1__parameterspec.GoogleCloudMlV1ParameterSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    resume_previous_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resumePreviousJobId' }})
    
