from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CreativeOptimizationConfigurationOptimizationModelEnum(str, Enum):
    CLICK = "CLICK"
    POST_CLICK = "POST_CLICK"
    POST_IMPRESSION = "POST_IMPRESSION"
    POST_CLICK_AND_IMPRESSION = "POST_CLICK_AND_IMPRESSION"
    VIDEO_COMPLETION = "VIDEO_COMPLETION"


@dataclass_json
@dataclass
class CreativeOptimizationConfiguration:
    r"""CreativeOptimizationConfiguration
    Creative optimization settings.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    optimization_activitys: Optional[List[OptimizationActivity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimizationActivitys') }})
    optimization_model: Optional[CreativeOptimizationConfigurationOptimizationModelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimizationModel') }})
    
