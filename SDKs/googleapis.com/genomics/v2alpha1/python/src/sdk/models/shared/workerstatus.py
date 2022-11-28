from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkerStatus:
    r"""WorkerStatus
    The status of the worker VM.
    """
    
    attached_disks: Optional[dict[str, DiskStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachedDisks') }})
    boot_disk: Optional[DiskStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootDisk') }})
    free_ram_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeRamBytes') }})
    total_ram_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalRamBytes') }})
    uptime_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uptimeSeconds') }})
    
