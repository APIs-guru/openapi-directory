from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRetailV2alphaModelDataStateEnum(str, Enum):
    DATA_STATE_UNSPECIFIED = "DATA_STATE_UNSPECIFIED"
    DATA_OK = "DATA_OK"
    DATA_ERROR = "DATA_ERROR"

class GoogleCloudRetailV2alphaModelFilteringOptionEnum(str, Enum):
    RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED"
    RECOMMENDATIONS_FILTERING_DISABLED = "RECOMMENDATIONS_FILTERING_DISABLED"
    RECOMMENDATIONS_FILTERING_ENABLED = "RECOMMENDATIONS_FILTERING_ENABLED"

class GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum(str, Enum):
    PERIODIC_TUNING_STATE_UNSPECIFIED = "PERIODIC_TUNING_STATE_UNSPECIFIED"
    PERIODIC_TUNING_DISABLED = "PERIODIC_TUNING_DISABLED"
    ALL_TUNING_DISABLED = "ALL_TUNING_DISABLED"
    PERIODIC_TUNING_ENABLED = "PERIODIC_TUNING_ENABLED"

class GoogleCloudRetailV2alphaModelServingStateEnum(str, Enum):
    SERVING_STATE_UNSPECIFIED = "SERVING_STATE_UNSPECIFIED"
    INACTIVE = "INACTIVE"
    ACTIVE = "ACTIVE"
    TUNED = "TUNED"

class GoogleCloudRetailV2alphaModelTrainingStateEnum(str, Enum):
    TRAINING_STATE_UNSPECIFIED = "TRAINING_STATE_UNSPECIFIED"
    PAUSED = "PAUSED"
    TRAINING = "TRAINING"


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaModelInput:
    r"""GoogleCloudRetailV2alphaModelInput
    Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    filtering_option: Optional[GoogleCloudRetailV2alphaModelFilteringOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filteringOption') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    optimization_objective: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimizationObjective') }})
    page_optimization_config: Optional[GoogleCloudRetailV2alphaModelPageOptimizationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageOptimizationConfig') }})
    periodic_tuning_state: Optional[GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodicTuningState') }})
    training_state: Optional[GoogleCloudRetailV2alphaModelTrainingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingState') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaModel:
    r"""GoogleCloudRetailV2alphaModel
    Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    data_state: Optional[GoogleCloudRetailV2alphaModelDataStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataState') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    filtering_option: Optional[GoogleCloudRetailV2alphaModelFilteringOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filteringOption') }})
    last_tune_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastTuneTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    optimization_objective: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimizationObjective') }})
    page_optimization_config: Optional[GoogleCloudRetailV2alphaModelPageOptimizationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageOptimizationConfig') }})
    periodic_tuning_state: Optional[GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodicTuningState') }})
    serving_config_lists: Optional[List[GoogleCloudRetailV2alphaModelServingConfigList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingConfigLists') }})
    serving_state: Optional[GoogleCloudRetailV2alphaModelServingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingState') }})
    training_state: Optional[GoogleCloudRetailV2alphaModelTrainingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingState') }})
    tuning_operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tuningOperation') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
