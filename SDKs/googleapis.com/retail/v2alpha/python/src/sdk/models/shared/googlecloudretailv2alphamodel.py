from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphamodelpageoptimizationconfig
from . import googlecloudretailv2alphamodelservingconfiglist

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
class GoogleCloudRetailV2alphaModel:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    data_state: Optional[GoogleCloudRetailV2alphaModelDataStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataState' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    filtering_option: Optional[GoogleCloudRetailV2alphaModelFilteringOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filteringOption' }})
    last_tune_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastTuneTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    optimization_objective: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optimizationObjective' }})
    page_optimization_config: Optional[googlecloudretailv2alphamodelpageoptimizationconfig.GoogleCloudRetailV2alphaModelPageOptimizationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageOptimizationConfig' }})
    periodic_tuning_state: Optional[GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodicTuningState' }})
    serving_config_lists: Optional[List[googlecloudretailv2alphamodelservingconfiglist.GoogleCloudRetailV2alphaModelServingConfigList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servingConfigLists' }})
    serving_state: Optional[GoogleCloudRetailV2alphaModelServingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servingState' }})
    training_state: Optional[GoogleCloudRetailV2alphaModelTrainingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingState' }})
    tuning_operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tuningOperation' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
