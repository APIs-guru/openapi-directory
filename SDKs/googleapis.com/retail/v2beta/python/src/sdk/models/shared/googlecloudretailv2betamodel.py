from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRetailV2betaModelDataStateEnum(str, Enum):
    DATA_STATE_UNSPECIFIED = "DATA_STATE_UNSPECIFIED"
    DATA_OK = "DATA_OK"
    DATA_ERROR = "DATA_ERROR"

class GoogleCloudRetailV2betaModelFilteringOptionEnum(str, Enum):
    RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED"
    RECOMMENDATIONS_FILTERING_DISABLED = "RECOMMENDATIONS_FILTERING_DISABLED"
    RECOMMENDATIONS_FILTERING_ENABLED = "RECOMMENDATIONS_FILTERING_ENABLED"

class GoogleCloudRetailV2betaModelPeriodicTuningStateEnum(str, Enum):
    PERIODIC_TUNING_STATE_UNSPECIFIED = "PERIODIC_TUNING_STATE_UNSPECIFIED"
    PERIODIC_TUNING_DISABLED = "PERIODIC_TUNING_DISABLED"
    ALL_TUNING_DISABLED = "ALL_TUNING_DISABLED"
    PERIODIC_TUNING_ENABLED = "PERIODIC_TUNING_ENABLED"

class GoogleCloudRetailV2betaModelServingStateEnum(str, Enum):
    SERVING_STATE_UNSPECIFIED = "SERVING_STATE_UNSPECIFIED"
    INACTIVE = "INACTIVE"
    ACTIVE = "ACTIVE"
    TUNED = "TUNED"

class GoogleCloudRetailV2betaModelTrainingStateEnum(str, Enum):
    TRAINING_STATE_UNSPECIFIED = "TRAINING_STATE_UNSPECIFIED"
    PAUSED = "PAUSED"
    TRAINING = "TRAINING"


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaModel:
    r"""GoogleCloudRetailV2betaModel
    Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    data_state: Optional[GoogleCloudRetailV2betaModelDataStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataState') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    filtering_option: Optional[GoogleCloudRetailV2betaModelFilteringOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filteringOption') }})
    last_tune_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastTuneTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    optimization_objective: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimizationObjective') }})
    periodic_tuning_state: Optional[GoogleCloudRetailV2betaModelPeriodicTuningStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodicTuningState') }})
    serving_config_lists: Optional[List[GoogleCloudRetailV2betaModelServingConfigList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingConfigLists') }})
    serving_state: Optional[GoogleCloudRetailV2betaModelServingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingState') }})
    training_state: Optional[GoogleCloudRetailV2betaModelTrainingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingState') }})
    tuning_operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tuningOperation') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudRetailV2betaModelInput:
    r"""GoogleCloudRetailV2betaModelInput
    Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    filtering_option: Optional[GoogleCloudRetailV2betaModelFilteringOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filteringOption') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    optimization_objective: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimizationObjective') }})
    periodic_tuning_state: Optional[GoogleCloudRetailV2betaModelPeriodicTuningStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodicTuningState') }})
    training_state: Optional[GoogleCloudRetailV2betaModelTrainingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingState') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
