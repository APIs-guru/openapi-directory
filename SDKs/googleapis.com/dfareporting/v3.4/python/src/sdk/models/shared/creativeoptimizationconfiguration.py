from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import optimizationactivity

class CreativeOptimizationConfigurationOptimizationModelEnum(str, Enum):
    CLICK = "CLICK"
    POST_CLICK = "POST_CLICK"
    POST_IMPRESSION = "POST_IMPRESSION"
    POST_CLICK_AND_IMPRESSION = "POST_CLICK_AND_IMPRESSION"
    VIDEO_COMPLETION = "VIDEO_COMPLETION"


@dataclass_json
@dataclass
class CreativeOptimizationConfiguration:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    optimization_activitys: Optional[List[optimizationactivity.OptimizationActivity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optimizationActivitys' }})
    optimization_model: Optional[CreativeOptimizationConfigurationOptimizationModelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optimizationModel' }})
    
