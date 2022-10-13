from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attacheddisk
from . import networkconfig
from . import networkendpoint
from . import schedulingconfig
from . import serviceaccount
from . import shieldedinstanceconfig
from . import symptom

class NodeAPIVersionEnum(str, Enum):
    API_VERSION_UNSPECIFIED = "API_VERSION_UNSPECIFIED"
    V1_ALPHA1 = "V1_ALPHA1"
    V1 = "V1"
    V2_ALPHA1 = "V2_ALPHA1"

class NodeHealthEnum(str, Enum):
    HEALTH_UNSPECIFIED = "HEALTH_UNSPECIFIED"
    HEALTHY = "HEALTHY"
    TIMEOUT = "TIMEOUT"
    UNHEALTHY_TENSORFLOW = "UNHEALTHY_TENSORFLOW"
    UNHEALTHY_MAINTENANCE = "UNHEALTHY_MAINTENANCE"

class NodeStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    RESTARTING = "RESTARTING"
    REIMAGING = "REIMAGING"
    DELETING = "DELETING"
    REPAIRING = "REPAIRING"
    STOPPED = "STOPPED"
    STOPPING = "STOPPING"
    STARTING = "STARTING"
    PREEMPTED = "PREEMPTED"
    TERMINATED = "TERMINATED"
    HIDING = "HIDING"
    HIDDEN = "HIDDEN"
    UNHIDING = "UNHIDING"


@dataclass_json
@dataclass
class Node:
    accelerator_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceleratorType' }})
    api_version: Optional[NodeAPIVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiVersion' }})
    cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cidrBlock' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    data_disks: Optional[List[attacheddisk.AttachedDisk]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataDisks' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    health: Optional[NodeHealthEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health' }})
    health_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthDescription' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_config: Optional[networkconfig.NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfig' }})
    network_endpoints: Optional[List[networkendpoint.NetworkEndpoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkEndpoints' }})
    runtime_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeVersion' }})
    scheduling_config: Optional[schedulingconfig.SchedulingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedulingConfig' }})
    service_account: Optional[serviceaccount.ServiceAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    shielded_instance_config: Optional[shieldedinstanceconfig.ShieldedInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shieldedInstanceConfig' }})
    state: Optional[NodeStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    symptoms: Optional[List[symptom.Symptom]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'symptoms' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
