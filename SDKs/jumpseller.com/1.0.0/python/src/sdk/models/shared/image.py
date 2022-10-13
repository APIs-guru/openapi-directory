from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imagefields


@dataclass_json
@dataclass
class Image:
    image: Optional[imagefields.ImageFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    
