from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import existingdisk
from . import nfsmount
from . import persistentdisk


@dataclass_json
@dataclass
class Volume:
    existing_disk: Optional[existingdisk.ExistingDisk] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'existingDisk' }})
    nfs_mount: Optional[nfsmount.NfsMount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nfsMount' }})
    persistent_disk: Optional[persistentdisk.PersistentDisk] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persistentDisk' }})
    volume: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume' }})
    
