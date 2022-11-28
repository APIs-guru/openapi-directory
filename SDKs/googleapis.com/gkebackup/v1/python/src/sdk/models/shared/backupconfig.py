from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BackupConfig:
    r"""BackupConfig
    BackupConfig defines the configuration of Backups created via this BackupPlan.
    """
    
    all_namespaces: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allNamespaces') }})
    encryption_key: Optional[EncryptionKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    include_secrets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeSecrets') }})
    include_volume_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeVolumeData') }})
    selected_applications: Optional[NamespacedNames] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedApplications') }})
    selected_namespaces: Optional[Namespaces] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedNamespaces') }})
    
