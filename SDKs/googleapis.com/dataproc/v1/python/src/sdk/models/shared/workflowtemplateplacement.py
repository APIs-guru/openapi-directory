from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import clusterselector
from . import managedcluster


@dataclass_json
@dataclass
class WorkflowTemplatePlacement:
    cluster_selector: Optional[clusterselector.ClusterSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterSelector' }})
    managed_cluster: Optional[managedcluster.ManagedCluster] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedCluster' }})
    
