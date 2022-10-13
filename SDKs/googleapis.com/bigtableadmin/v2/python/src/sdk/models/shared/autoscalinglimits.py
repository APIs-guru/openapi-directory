from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AutoscalingLimits:
    max_serve_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxServeNodes' }})
    min_serve_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minServeNodes' }})
    
