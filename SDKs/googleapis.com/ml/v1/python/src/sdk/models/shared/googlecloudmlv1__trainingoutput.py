from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__builtinalgorithmoutput
from . import googlecloudmlv1__hyperparameteroutput


@dataclass_json
@dataclass
class GoogleCloudMlV1TrainingOutput:
    built_in_algorithm_output: Optional[googlecloudmlv1__builtinalgorithmoutput.GoogleCloudMlV1BuiltInAlgorithmOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'builtInAlgorithmOutput' }})
    completed_trial_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completedTrialCount' }})
    consumed_ml_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumedMLUnits' }})
    hyperparameter_metric_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hyperparameterMetricTag' }})
    is_built_in_algorithm_job: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isBuiltInAlgorithmJob' }})
    is_hyperparameter_tuning_job: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isHyperparameterTuningJob' }})
    trials: Optional[List[googlecloudmlv1__hyperparameteroutput.GoogleCloudMlV1HyperparameterOutput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trials' }})
    web_access_uris: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webAccessUris' }})
    
