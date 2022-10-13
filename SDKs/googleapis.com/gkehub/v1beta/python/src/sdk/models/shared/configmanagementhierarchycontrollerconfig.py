from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfigManagementHierarchyControllerConfig:
    enable_hierarchical_resource_quota: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableHierarchicalResourceQuota' }})
    enable_pod_tree_labels: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enablePodTreeLabels' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    
