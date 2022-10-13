from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DiskConfig:
    boot_disk_size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootDiskSizeGb' }})
    boot_disk_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootDiskType' }})
    local_ssd_interface: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localSsdInterface' }})
    num_local_ssds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numLocalSsds' }})
    
