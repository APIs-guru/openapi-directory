from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PersistentDisk:
    r"""PersistentDisk
    Configuration for a persistent disk to be attached to the VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations.
    """
    
    size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeGb') }})
    source_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceImage') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
