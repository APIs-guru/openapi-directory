from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cluster


@dataclass_json
@dataclass
class CreateClusterRequest:
    cluster: Optional[cluster.Cluster] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
