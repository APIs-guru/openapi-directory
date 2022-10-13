from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gkenodepoolautoscalingconfig
from . import gkenodeconfig


@dataclass_json
@dataclass
class GkeNodePoolConfig:
    autoscaling: Optional[gkenodepoolautoscalingconfig.GkeNodePoolAutoscalingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoscaling' }})
    config: Optional[gkenodeconfig.GkeNodeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    
