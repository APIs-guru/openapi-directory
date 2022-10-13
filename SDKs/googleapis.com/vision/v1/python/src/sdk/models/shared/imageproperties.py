from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dominantcolorsannotation


@dataclass_json
@dataclass
class ImageProperties:
    dominant_colors: Optional[dominantcolorsannotation.DominantColorsAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dominantColors' }})
    
