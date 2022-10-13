from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphamodelpageoptimizationconfigpanel

class GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum(str, Enum):
    RESTRICTION_UNSPECIFIED = "RESTRICTION_UNSPECIFIED"
    NO_RESTRICTION = "NO_RESTRICTION"
    UNIQUE_SERVING_CONFIG_RESTRICTION = "UNIQUE_SERVING_CONFIG_RESTRICTION"
    UNIQUE_MODEL_RESTRICTION = "UNIQUE_MODEL_RESTRICTION"
    UNIQUE_MODEL_TYPE_RESTRICTION = "UNIQUE_MODEL_TYPE_RESTRICTION"


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaModelPageOptimizationConfig:
    page_optimization_event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageOptimizationEventType' }})
    panels: Optional[List[googlecloudretailv2alphamodelpageoptimizationconfigpanel.GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'panels' }})
    restriction: Optional[GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restriction' }})
    
