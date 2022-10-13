from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cropproperties


@dataclass_json
@dataclass
class ImageProperties:
    angle: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'angle' }})
    brightness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brightness' }})
    content_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentUri' }})
    contrast: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contrast' }})
    crop_properties: Optional[cropproperties.CropProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cropProperties' }})
    source_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceUri' }})
    transparency: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transparency' }})
    
