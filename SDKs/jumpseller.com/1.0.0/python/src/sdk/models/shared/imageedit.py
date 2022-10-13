from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imageeditfields


@dataclass_json
@dataclass
class ImageEdit:
    image: Optional[imageeditfields.ImageEditFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    
