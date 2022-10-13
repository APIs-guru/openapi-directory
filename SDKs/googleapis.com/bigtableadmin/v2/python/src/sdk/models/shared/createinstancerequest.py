from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cluster
from . import instance


@dataclass_json
@dataclass
class CreateInstanceRequest:
    clusters: Optional[dict[str, cluster.Cluster]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusters' }})
    instance: Optional[instance.Instance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceId' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    
