from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GkeServiceInput:
    r"""GkeServiceInput
    GKE Service. The \"service\" here represents a Kubernetes service object (https://kubernetes.io/docs/concepts/services-networking/service). The field names correspond to the resource labels on k8s_service monitored resources (https://cloud.google.com/monitoring/api/resources#tag_k8s_service).
    """
    
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterName') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    namespace_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceName') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    

@dataclass_json
@dataclass
class GkeService:
    r"""GkeService
    GKE Service. The \"service\" here represents a Kubernetes service object (https://kubernetes.io/docs/concepts/services-networking/service). The field names correspond to the resource labels on k8s_service monitored resources (https://cloud.google.com/monitoring/api/resources#tag_k8s_service).
    """
    
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterName') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    namespace_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceName') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    
