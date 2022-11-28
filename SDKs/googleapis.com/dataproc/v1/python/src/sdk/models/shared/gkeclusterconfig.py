from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GkeClusterConfig:
    r"""GkeClusterConfig
    The cluster's GKE config.
    """
    
    gke_cluster_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeClusterTarget') }})
    namespaced_gke_deployment_target: Optional[NamespacedGkeDeploymentTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespacedGkeDeploymentTarget') }})
    node_pool_target: Optional[List[GkeNodePoolTarget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePoolTarget') }})
    
