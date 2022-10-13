from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class BackupSourceInstanceTierEnum(str, Enum):
    TIER_UNSPECIFIED = "TIER_UNSPECIFIED"
    STANDARD = "STANDARD"
    PREMIUM = "PREMIUM"
    BASIC_HDD = "BASIC_HDD"
    BASIC_SSD = "BASIC_SSD"
    HIGH_SCALE_SSD = "HIGH_SCALE_SSD"
    ENTERPRISE = "ENTERPRISE"

class BackupStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    FINALIZING = "FINALIZING"
    READY = "READY"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class Backup:
    capacity_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityGb' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    download_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadBytes' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    satisfies_pzs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'satisfiesPzs' }})
    source_file_share: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceFileShare' }})
    source_instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceInstance' }})
    source_instance_tier: Optional[BackupSourceInstanceTierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceInstanceTier' }})
    state: Optional[BackupStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    storage_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageBytes' }})
    
