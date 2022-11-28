from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class InstanceConfigInput:
    r"""InstanceConfigInput
    A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication.
    """
    
    base_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseConfig') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    leader_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leaderOptions') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    replicas: Optional[List[ReplicaInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicas') }})
    

@dataclass_json
@dataclass
class InstanceConfig:
    r"""InstanceConfig
    A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication.
    """
    
    base_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseConfig') }})
    config_type: Optional[InstanceConfigConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configType') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    free_instance_availability: Optional[InstanceConfigFreeInstanceAvailabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeInstanceAvailability') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    leader_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leaderOptions') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    optional_replicas: Optional[List[ReplicaInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optionalReplicas') }})
    reconciling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reconciling') }})
    replicas: Optional[List[ReplicaInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicas') }})
    state: Optional[InstanceConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
