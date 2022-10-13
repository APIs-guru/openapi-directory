from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import clusterupdate


@dataclass_json
@dataclass
class UpdateClusterRequest:
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    update: Optional[clusterupdate.ClusterUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
