from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RollbackNodePoolUpgradeRequest:
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodePoolId' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    respect_pdb: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'respectPdb' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
