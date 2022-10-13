from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DiskStatus:
    free_space_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeSpaceBytes' }})
    total_space_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSpaceBytes' }})
    
