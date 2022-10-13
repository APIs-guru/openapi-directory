from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nodetaint


@dataclass_json
@dataclass
class NodeTaints:
    taints: Optional[List[nodetaint.NodeTaint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taints' }})
    
