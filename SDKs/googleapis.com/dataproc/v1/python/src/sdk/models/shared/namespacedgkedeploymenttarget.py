from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NamespacedGkeDeploymentTarget:
    cluster_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterNamespace' }})
    target_gke_cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetGkeCluster' }})
    
