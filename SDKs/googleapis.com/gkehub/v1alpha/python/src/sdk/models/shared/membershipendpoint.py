from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import appliancecluster
from . import edgecluster
from . import gkecluster
from . import kubernetesmetadata
from . import kubernetesresource
from . import multicloudcluster
from . import onpremcluster


@dataclass_json
@dataclass
class MembershipEndpoint:
    appliance_cluster: Optional[appliancecluster.ApplianceCluster] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applianceCluster' }})
    edge_cluster: Optional[edgecluster.EdgeCluster] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'edgeCluster' }})
    gke_cluster: Optional[gkecluster.GkeCluster] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gkeCluster' }})
    kubernetes_metadata: Optional[kubernetesmetadata.KubernetesMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubernetesMetadata' }})
    kubernetes_resource: Optional[kubernetesresource.KubernetesResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubernetesResource' }})
    multi_cloud_cluster: Optional[multicloudcluster.MultiCloudCluster] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiCloudCluster' }})
    on_prem_cluster: Optional[onpremcluster.OnPremCluster] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onPremCluster' }})
    
