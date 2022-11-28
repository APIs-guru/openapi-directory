from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum(str, Enum):
    RESTRICTION_UNSPECIFIED = "RESTRICTION_UNSPECIFIED"
    NO_RESTRICTION = "NO_RESTRICTION"
    UNIQUE_SERVING_CONFIG_RESTRICTION = "UNIQUE_SERVING_CONFIG_RESTRICTION"
    UNIQUE_MODEL_RESTRICTION = "UNIQUE_MODEL_RESTRICTION"
    UNIQUE_MODEL_TYPE_RESTRICTION = "UNIQUE_MODEL_TYPE_RESTRICTION"


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaModelPageOptimizationConfig:
    r"""GoogleCloudRetailV2alphaModelPageOptimizationConfig
    The PageOptimizationConfig for model training. This determines how many panels to optimize for, and which serving configurations to consider for each panel. The purpose of this model is to optimize which ServingConfig to show on which panels in way that optimizes the visitors shopping journey.
    """
    
    page_optimization_event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageOptimizationEventType') }})
    panels: Optional[List[GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panels') }})
    restriction: Optional[GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restriction') }})
    
