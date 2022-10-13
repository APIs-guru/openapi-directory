from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TagHold:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    help_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'helpLink' }})
    holder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holder' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origin' }})
    
