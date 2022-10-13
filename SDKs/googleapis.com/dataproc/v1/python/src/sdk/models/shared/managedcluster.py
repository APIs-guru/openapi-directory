from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import clusterconfig


@dataclass_json
@dataclass
class ManagedCluster:
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterName' }})
    config: Optional[clusterconfig.ClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    
