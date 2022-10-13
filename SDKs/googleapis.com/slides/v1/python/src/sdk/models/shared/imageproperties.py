from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cropproperties
from . import link
from . import outline
from . import recolor
from . import shadow


@dataclass_json
@dataclass
class ImageProperties:
    brightness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brightness' }})
    contrast: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contrast' }})
    crop_properties: Optional[cropproperties.CropProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cropProperties' }})
    link: Optional[link.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    outline: Optional[outline.Outline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outline' }})
    recolor: Optional[recolor.Recolor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recolor' }})
    shadow: Optional[shadow.Shadow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shadow' }})
    transparency: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transparency' }})
    
