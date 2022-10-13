from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import onclick


@dataclass_json
@dataclass
class Image:
    aspect_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aspectRatio' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUrl' }})
    on_click: Optional[onclick.OnClick] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onClick' }})
    
