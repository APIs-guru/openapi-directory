from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InstanceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    REPAIRING = "REPAIRING"
    DELETING = "DELETING"
    ERROR = "ERROR"
    RESTORING = "RESTORING"
    SUSPENDED = "SUSPENDED"
    REVERTING = "REVERTING"
    SUSPENDING = "SUSPENDING"
    RESUMING = "RESUMING"

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
class InstanceInput:
    r"""InstanceInput
    A Filestore instance.
    """
    
    capacity_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityGb') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    file_shares: Optional[List[FileShareConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileShares') }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyName') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    multi_share_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiShareEnabled') }})
    networks: Optional[List[NetworkConfigInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    tier: Optional[InstanceTierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    

@dataclass_json
@dataclass
class Instance:
    r"""Instance
    A Filestore instance.
    """
    
    capacity_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityGb') }})
    capacity_step_size_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityStepSizeGb') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    file_shares: Optional[List[FileShareConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileShares') }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyName') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    max_capacity_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxCapacityGb') }})
    max_share_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxShareCount') }})
    multi_share_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiShareEnabled') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    networks: Optional[List[NetworkConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    satisfies_pzs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satisfiesPzs') }})
    state: Optional[InstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    suspension_reasons: Optional[List[InstanceSuspensionReasonsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspensionReasons') }})
    tier: Optional[InstanceTierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    
