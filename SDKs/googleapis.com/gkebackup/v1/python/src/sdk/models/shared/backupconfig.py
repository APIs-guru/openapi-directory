from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import encryptionkey
from . import namespacednames
from . import namespaces


@dataclass_json
@dataclass
class BackupConfig:
    all_namespaces: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allNamespaces' }})
    encryption_key: Optional[encryptionkey.EncryptionKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionKey' }})
    include_secrets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeSecrets' }})
    include_volume_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeVolumeData' }})
    selected_applications: Optional[namespacednames.NamespacedNames] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectedApplications' }})
    selected_namespaces: Optional[namespaces.Namespaces] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectedNamespaces' }})
    
