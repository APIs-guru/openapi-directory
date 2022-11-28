from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoprovisioningNodePoolDefaults:
    r"""AutoprovisioningNodePoolDefaults
    AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP.
    """
    
    boot_disk_kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootDiskKmsKey') }})
    disk_size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSizeGb') }})
    disk_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskType') }})
    image_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageType') }})
    management: Optional[NodeManagement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('management') }})
    min_cpu_platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minCpuPlatform') }})
    oauth_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthScopes') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    shielded_instance_config: Optional[ShieldedInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shieldedInstanceConfig') }})
    upgrade_settings: Optional[UpgradeSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeSettings') }})
    
