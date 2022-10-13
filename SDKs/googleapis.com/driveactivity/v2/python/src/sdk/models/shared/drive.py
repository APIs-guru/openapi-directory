from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import driveitem


@dataclass_json
@dataclass
class Drive:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    root: Optional[driveitem.DriveItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'root' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
