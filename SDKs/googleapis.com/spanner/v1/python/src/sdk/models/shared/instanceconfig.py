from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import replicainfo
from . import replicainfo

class InstanceConfigConfigTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    GOOGLE_MANAGED = "GOOGLE_MANAGED"
    USER_MANAGED = "USER_MANAGED"

class InstanceConfigFreeInstanceAvailabilityEnum(str, Enum):
    FREE_INSTANCE_AVAILABILITY_UNSPECIFIED = "FREE_INSTANCE_AVAILABILITY_UNSPECIFIED"
    AVAILABLE = "AVAILABLE"
    UNSUPPORTED = "UNSUPPORTED"
    DISABLED = "DISABLED"
    QUOTA_EXCEEDED = "QUOTA_EXCEEDED"

class InstanceConfigStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"


@dataclass_json
@dataclass
class InstanceConfig:
    base_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseConfig' }})
    config_type: Optional[InstanceConfigConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configType' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    free_instance_availability: Optional[InstanceConfigFreeInstanceAvailabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeInstanceAvailability' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    leader_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leaderOptions' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    optional_replicas: Optional[List[replicainfo.ReplicaInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optionalReplicas' }})
    reconciling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reconciling' }})
    replicas: Optional[List[replicainfo.ReplicaInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicas' }})
    state: Optional[InstanceConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
