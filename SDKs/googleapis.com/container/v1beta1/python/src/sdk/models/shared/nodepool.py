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
    NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload. These upgrade settings control the level of parallelism and the level of disruption caused by an upgrade. maxUnavailable controls the number of nodes that can be simultaneously unavailable. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). Note: upgrades inevitably introduce some disruption since workloads need to be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0, this holds true. (Disruption stays within the limits of PodDisruptionBudget, if it is configured.) Consider a hypothetical node pool with 5 nodes having maxSurge=2, maxUnavailable=1. This means the upgrade process upgrades 3 nodes simultaneously. It creates 2 additional (upgraded) nodes, then it brings down 3 old (not yet upgraded) nodes at the same time. This ensures that there are always at least 4 nodes available.
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
    
