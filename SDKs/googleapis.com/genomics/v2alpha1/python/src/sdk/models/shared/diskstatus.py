from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DiskStatus:
    r"""DiskStatus
    The status of a disk on a VM.
    """
    
    free_space_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeSpaceBytes') }})
    total_space_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSpaceBytes') }})
    
