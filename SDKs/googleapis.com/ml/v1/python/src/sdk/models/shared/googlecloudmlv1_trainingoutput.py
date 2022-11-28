from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudMlV1TrainingOutputInput:
    r"""GoogleCloudMlV1TrainingOutputInput
    Represents results of a training job. Output only.
    """
    
    built_in_algorithm_output: Optional[GoogleCloudMlV1BuiltInAlgorithmOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builtInAlgorithmOutput') }})
    completed_trial_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completedTrialCount') }})
    consumed_ml_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumedMLUnits') }})
    hyperparameter_metric_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperparameterMetricTag') }})
    is_built_in_algorithm_job: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isBuiltInAlgorithmJob') }})
    is_hyperparameter_tuning_job: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isHyperparameterTuningJob') }})
    trials: Optional[List[GoogleCloudMlV1HyperparameterOutput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trials') }})
    

@dataclass_json
@dataclass
class GoogleCloudMlV1TrainingOutput:
    r"""GoogleCloudMlV1TrainingOutput
    Represents results of a training job. Output only.
    """
    
    built_in_algorithm_output: Optional[GoogleCloudMlV1BuiltInAlgorithmOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builtInAlgorithmOutput') }})
    completed_trial_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completedTrialCount') }})
    consumed_ml_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumedMLUnits') }})
    hyperparameter_metric_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperparameterMetricTag') }})
    is_built_in_algorithm_job: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isBuiltInAlgorithmJob') }})
    is_hyperparameter_tuning_job: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isHyperparameterTuningJob') }})
    trials: Optional[List[GoogleCloudMlV1HyperparameterOutput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trials') }})
    web_access_uris: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webAccessUris') }})
    
