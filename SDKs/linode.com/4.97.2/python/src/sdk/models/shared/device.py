from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Device:
    disk_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk_id' }})
    volume_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume_id' }})
    
