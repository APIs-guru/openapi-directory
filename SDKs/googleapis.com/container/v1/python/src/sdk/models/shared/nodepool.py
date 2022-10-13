from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import nodepoolautoscaling
from . import statuscondition
from . import nodeconfig
from . import nodemanagement
from . import maxpodsconstraint
from . import nodenetworkconfig
from . import updateinfo
from . import upgradesettings

class NodePoolStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    PROVISIONING = "PROVISIONING"
    RUNNING = "RUNNING"
    RUNNING_WITH_ERROR = "RUNNING_WITH_ERROR"
    RECONCILING = "RECONCILING"
    STOPPING = "STOPPING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class NodePool:
    autoscaling: Optional[nodepoolautoscaling.NodePoolAutoscaling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoscaling' }})
    conditions: Optional[List[statuscondition.StatusCondition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    config: Optional[nodeconfig.NodeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    initial_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialNodeCount' }})
    instance_group_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceGroupUrls' }})
    locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    management: Optional[nodemanagement.NodeManagement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'management' }})
    max_pods_constraint: Optional[maxpodsconstraint.MaxPodsConstraint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxPodsConstraint' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_config: Optional[nodenetworkconfig.NodeNetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfig' }})
    pod_ipv4_cidr_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'podIpv4CidrSize' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    status: Optional[NodePoolStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    update_info: Optional[updateinfo.UpdateInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateInfo' }})
    upgrade_settings: Optional[upgradesettings.UpgradeSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgradeSettings' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
