from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nodemanagement
from . import shieldedinstanceconfig
from . import upgradesettings


@dataclass_json
@dataclass
class AutoprovisioningNodePoolDefaults:
    boot_disk_kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootDiskKmsKey' }})
    disk_size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSizeGb' }})
    disk_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskType' }})
    image_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageType' }})
    management: Optional[nodemanagement.NodeManagement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'management' }})
    min_cpu_platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minCpuPlatform' }})
    oauth_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauthScopes' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    shielded_instance_config: Optional[shieldedinstanceconfig.ShieldedInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shieldedInstanceConfig' }})
    upgrade_settings: Optional[upgradesettings.UpgradeSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgradeSettings' }})
    
