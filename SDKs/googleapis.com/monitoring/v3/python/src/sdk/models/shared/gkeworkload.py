from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GkeWorkload:
    r"""GkeWorkload
    A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod).
    """
    
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterName') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    namespace_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceName') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    top_level_controller_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topLevelControllerName') }})
    top_level_controller_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topLevelControllerType') }})
    

@dataclass_json
@dataclass
class GkeWorkloadInput:
    r"""GkeWorkloadInput
    A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod).
    """
    
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterName') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    namespace_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceName') }})
    top_level_controller_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topLevelControllerName') }})
    top_level_controller_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topLevelControllerType') }})
    
