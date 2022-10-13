from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import instancemessage
from . import googlecloudmemcachev1beta2maintenancepolicy
from . import maintenanceschedule
from . import node
from . import nodeconfig
from . import memcacheparameters

class InstanceMemcacheVersionEnum(str, Enum):
    MEMCACHE_VERSION_UNSPECIFIED = "MEMCACHE_VERSION_UNSPECIFIED"
    MEMCACHE_1_5 = "MEMCACHE_1_5"

class InstanceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    PERFORMING_MAINTENANCE = "PERFORMING_MAINTENANCE"


@dataclass_json
@dataclass
class Instance:
    authorized_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizedNetwork' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    discovery_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discoveryEndpoint' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    instance_messages: Optional[List[instancemessage.InstanceMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceMessages' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    maintenance_policy: Optional[googlecloudmemcachev1beta2maintenancepolicy.GoogleCloudMemcacheV1beta2MaintenancePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintenancePolicy' }})
    maintenance_schedule: Optional[maintenanceschedule.MaintenanceSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintenanceSchedule' }})
    memcache_full_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memcacheFullVersion' }})
    memcache_nodes: Optional[List[node.Node]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memcacheNodes' }})
    memcache_version: Optional[InstanceMemcacheVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memcacheVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_config: Optional[nodeconfig.NodeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeConfig' }})
    node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeCount' }})
    parameters: Optional[memcacheparameters.MemcacheParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    state: Optional[InstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateAvailable' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zones' }})
    
