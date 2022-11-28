from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MembershipEndpointInput:
    r"""MembershipEndpointInput
    MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
    """
    
    appliance_cluster: Optional[ApplianceCluster] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applianceCluster') }})
    edge_cluster: Optional[EdgeCluster] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edgeCluster') }})
    gke_cluster: Optional[GkeClusterInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeCluster') }})
    kubernetes_resource: Optional[KubernetesResourceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetesResource') }})
    multi_cloud_cluster: Optional[MultiCloudClusterInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiCloudCluster') }})
    on_prem_cluster: Optional[OnPremClusterInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onPremCluster') }})
    

@dataclass_json
@dataclass
class MembershipEndpoint:
    r"""MembershipEndpoint
    MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
    """
    
    appliance_cluster: Optional[ApplianceCluster] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applianceCluster') }})
    edge_cluster: Optional[EdgeCluster] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edgeCluster') }})
    gke_cluster: Optional[GkeCluster] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeCluster') }})
    kubernetes_metadata: Optional[KubernetesMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetesMetadata') }})
    kubernetes_resource: Optional[KubernetesResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetesResource') }})
    multi_cloud_cluster: Optional[MultiCloudCluster] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiCloudCluster') }})
    on_prem_cluster: Optional[OnPremCluster] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onPremCluster') }})
    
