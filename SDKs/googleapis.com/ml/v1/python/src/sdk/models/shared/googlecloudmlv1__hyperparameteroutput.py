from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1_hyperparameteroutput_hyperparametermetric
from . import googlecloudmlv1__builtinalgorithmoutput
from . import googlecloudmlv1_hyperparameteroutput_hyperparametermetric

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
    all_metrics: Optional[List[googlecloudmlv1_hyperparameteroutput_hyperparametermetric.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allMetrics' }})
    built_in_algorithm_output: Optional[googlecloudmlv1__builtinalgorithmoutput.GoogleCloudMlV1BuiltInAlgorithmOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'builtInAlgorithmOutput' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    final_metric: Optional[googlecloudmlv1_hyperparameteroutput_hyperparametermetric.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finalMetric' }})
    hyperparameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hyperparameters' }})
    is_trial_stopped_early: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isTrialStoppedEarly' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    state: Optional[GoogleCloudMlV1HyperparameterOutputStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    trial_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trialId' }})
    web_access_uris: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webAccessUris' }})
    
