from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Volume:
    r"""Volume
    Carries information about storage that can be attached to a VM. Specify either `Volume` or `Disk`, but not both.
    """
    
    existing_disk: Optional[ExistingDisk] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existingDisk') }})
    nfs_mount: Optional[NfsMount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nfsMount') }})
    persistent_disk: Optional[PersistentDisk] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistentDisk') }})
    volume: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    
