from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nodepool


@dataclass_json
@dataclass
class CreateNodePoolRequest:
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterId' }})
    node_pool: Optional[nodepool.NodePool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodePool' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
