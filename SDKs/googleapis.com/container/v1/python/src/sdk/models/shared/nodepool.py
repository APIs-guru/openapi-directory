from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""NodePool
    NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload.
    """
    
    autoscaling: Optional[NodePoolAutoscaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoscaling') }})
    conditions: Optional[List[StatusCondition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    config: Optional[NodeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    initial_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialNodeCount') }})
    instance_group_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceGroupUrls') }})
    locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    management: Optional[NodeManagement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('management') }})
    max_pods_constraint: Optional[MaxPodsConstraint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPodsConstraint') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_config: Optional[NodeNetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    placement_policy: Optional[PlacementPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementPolicy') }})
    pod_ipv4_cidr_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('podIpv4CidrSize') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    status: Optional[NodePoolStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    update_info: Optional[UpdateInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateInfo') }})
    upgrade_settings: Optional[UpgradeSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeSettings') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
