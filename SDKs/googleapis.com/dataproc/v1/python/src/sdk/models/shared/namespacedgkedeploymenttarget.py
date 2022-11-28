from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NamespacedGkeDeploymentTarget:
    r"""NamespacedGkeDeploymentTarget
    Deprecated. Used only for the deprecated beta. A full, namespace-isolated deployment target for an existing GKE cluster.
    """
    
    cluster_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterNamespace') }})
    target_gke_cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetGkeCluster') }})
    
