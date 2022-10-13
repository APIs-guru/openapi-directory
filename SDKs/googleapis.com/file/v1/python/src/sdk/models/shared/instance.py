from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import fileshareconfig
from . import networkconfig

class InstanceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    REPAIRING = "REPAIRING"
    DELETING = "DELETING"
    ERROR = "ERROR"
    RESTORING = "RESTORING"
    SUSPENDED = "SUSPENDED"

class InstanceSuspensionReasonsEnum(str, Enum):
    SUSPENSION_REASON_UNSPECIFIED = "SUSPENSION_REASON_UNSPECIFIED"
    KMS_KEY_ISSUE = "KMS_KEY_ISSUE"

class InstanceTierEnum(str, Enum):
    TIER_UNSPECIFIED = "TIER_UNSPECIFIED"
    STANDARD = "STANDARD"
    PREMIUM = "PREMIUM"
    BASIC_HDD = "BASIC_HDD"
    BASIC_SSD = "BASIC_SSD"
    HIGH_SCALE_SSD = "HIGH_SCALE_SSD"
    ENTERPRISE = "ENTERPRISE"


@dataclass_json
@dataclass
class Instance:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    file_shares: Optional[List[fileshareconfig.FileShareConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileShares' }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyName' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    networks: Optional[List[networkconfig.NetworkConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networks' }})
    satisfies_pzs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'satisfiesPzs' }})
    state: Optional[InstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    suspension_reasons: Optional[List[InstanceSuspensionReasonsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspensionReasons' }})
    tier: Optional[InstanceTierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier' }})
    
