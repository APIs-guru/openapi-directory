from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Disk:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeGb' }})
    source_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceImage' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
