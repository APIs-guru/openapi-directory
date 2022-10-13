from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Tag:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }, 'form': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }, 'form': { 'field_name': 'id' }})
    image_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageCount' }, 'form': { 'field_name': 'imageCount' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }, 'form': { 'field_name': 'name' }})
    
