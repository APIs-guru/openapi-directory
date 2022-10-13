from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import node


@dataclass_json
@dataclass
class NodePool:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nodes: Optional[List[node.Node]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    
