from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import namespacedgkedeploymenttarget
from . import gkenodepooltarget


@dataclass_json
@dataclass
class GkeClusterConfig:
    gke_cluster_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gkeClusterTarget' }})
    namespaced_gke_deployment_target: Optional[namespacedgkedeploymenttarget.NamespacedGkeDeploymentTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespacedGkeDeploymentTarget' }})
    node_pool_target: Optional[List[gkenodepooltarget.GkeNodePoolTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodePoolTarget' }})
    
