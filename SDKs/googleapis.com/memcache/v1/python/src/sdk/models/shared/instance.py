from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class InstanceInput:
    r"""InstanceInput
    A Memorystore for Memcached instance
    """
    
    authorized_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedNetwork') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    instance_messages: Optional[List[InstanceMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceMessages') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    maintenance_policy: Optional[GoogleCloudMemcacheV1MaintenancePolicyInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenancePolicy') }})
    memcache_version: Optional[InstanceMemcacheVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memcacheVersion') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_config: Optional[NodeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeConfig') }})
    node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeCount') }})
    parameters: Optional[MemcacheParametersInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zones') }})
    

@dataclass_json
@dataclass
class Instance:
    r"""Instance
    A Memorystore for Memcached instance
    """
    
    authorized_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedNetwork') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    discovery_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discoveryEndpoint') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    instance_messages: Optional[List[InstanceMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceMessages') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    maintenance_policy: Optional[GoogleCloudMemcacheV1MaintenancePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenancePolicy') }})
    maintenance_schedule: Optional[MaintenanceSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceSchedule') }})
    memcache_full_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memcacheFullVersion') }})
    memcache_nodes: Optional[List[Node]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memcacheNodes') }})
    memcache_version: Optional[InstanceMemcacheVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memcacheVersion') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_config: Optional[NodeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeConfig') }})
    node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeCount') }})
    parameters: Optional[MemcacheParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    state: Optional[InstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zones') }})
    
