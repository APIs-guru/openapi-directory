from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nodemanagement


@dataclass_json
@dataclass
class SetNodePoolManagementRequest:
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterId' }})
    management: Optional[nodemanagement.NodeManagement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'management' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodePoolId' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
