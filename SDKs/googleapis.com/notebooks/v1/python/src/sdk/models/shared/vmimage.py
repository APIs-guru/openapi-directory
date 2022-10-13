from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VMImage:
    image_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageFamily' }})
    image_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageName' }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    
