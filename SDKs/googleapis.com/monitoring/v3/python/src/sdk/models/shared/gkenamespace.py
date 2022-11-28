from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GkeNamespaceInput:
    r"""GkeNamespaceInput
    GKE Namespace. The field names correspond to the resource metadata labels on monitored resources that fall under a namespace (for example, k8s_container or k8s_pod).
    """
    
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterName') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    namespace_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceName') }})
    

@dataclass_json
@dataclass
class GkeNamespace:
    r"""GkeNamespace
    GKE Namespace. The field names correspond to the resource metadata labels on monitored resources that fall under a namespace (for example, k8s_container or k8s_pod).
    """
    
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterName') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    namespace_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceName') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    
