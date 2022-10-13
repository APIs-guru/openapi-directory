from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import color


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1ColorInfo:
    color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    pixel_fraction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pixelFraction' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    
