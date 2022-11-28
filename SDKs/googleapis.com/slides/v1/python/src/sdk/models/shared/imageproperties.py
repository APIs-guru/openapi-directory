from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageProperties:
    r"""ImageProperties
    The properties of the Image.
    """
    
    brightness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brightness') }})
    contrast: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contrast') }})
    crop_properties: Optional[CropProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cropProperties') }})
    link: Optional[Link] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    outline: Optional[Outline] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outline') }})
    recolor: Optional[Recolor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recolor') }})
    shadow: Optional[Shadow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shadow') }})
    transparency: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transparency') }})
    
