from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betamodelservingconfiglist

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
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    data_state: Optional[GoogleCloudRetailV2betaModelDataStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataState' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    filtering_option: Optional[GoogleCloudRetailV2betaModelFilteringOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filteringOption' }})
    last_tune_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastTuneTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    optimization_objective: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optimizationObjective' }})
    periodic_tuning_state: Optional[GoogleCloudRetailV2betaModelPeriodicTuningStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodicTuningState' }})
    serving_config_lists: Optional[List[googlecloudretailv2betamodelservingconfiglist.GoogleCloudRetailV2betaModelServingConfigList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servingConfigLists' }})
    serving_state: Optional[GoogleCloudRetailV2betaModelServingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servingState' }})
    training_state: Optional[GoogleCloudRetailV2betaModelTrainingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingState' }})
    tuning_operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tuningOperation' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
