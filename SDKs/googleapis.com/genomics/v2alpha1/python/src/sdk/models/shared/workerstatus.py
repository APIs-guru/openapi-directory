from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import diskstatus
from . import diskstatus


@dataclass_json
@dataclass
class WorkerStatus:
    attached_disks: Optional[dict[str, diskstatus.DiskStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachedDisks' }})
    boot_disk: Optional[diskstatus.DiskStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootDisk' }})
    free_ram_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeRamBytes' }})
    total_ram_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalRamBytes' }})
    uptime_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uptimeSeconds' }})
    
