from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import animation
from . import image


@dataclass_json
@dataclass
class Overlay:
    animations: Optional[List[animation.Animation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'animations' }})
    image: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    
