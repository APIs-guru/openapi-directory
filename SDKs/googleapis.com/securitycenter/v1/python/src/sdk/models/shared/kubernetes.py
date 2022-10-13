from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accessreview
from . import googlecloudsecuritycenterv1binding
from . import nodepool
from . import node
from . import pod
from . import role


@dataclass_json
@dataclass
class Kubernetes:
    access_reviews: Optional[List[accessreview.AccessReview]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessReviews' }})
    bindings: Optional[List[googlecloudsecuritycenterv1binding.GoogleCloudSecuritycenterV1Binding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bindings' }})
    node_pools: Optional[List[nodepool.NodePool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodePools' }})
    nodes: Optional[List[node.Node]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    pods: Optional[List[pod.Pod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pods' }})
    roles: Optional[List[role.Role]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    
