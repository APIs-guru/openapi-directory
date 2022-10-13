from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Disk:
    disk_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskType' }})
    mount_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mountPoint' }})
    size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeGb' }})
    
