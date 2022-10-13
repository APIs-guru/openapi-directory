from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NodeConfig:
    max_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxNodeCount' }})
    min_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minNodeCount' }})
    
