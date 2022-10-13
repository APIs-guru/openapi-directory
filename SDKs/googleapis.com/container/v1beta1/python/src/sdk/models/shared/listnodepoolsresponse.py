from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nodepool


@dataclass_json
@dataclass
class ListNodePoolsResponse:
    node_pools: Optional[List[nodepool.NodePool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodePools' }})
    
