from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageProperties:
    r"""ImageProperties
    The properties of an image.
    """
    
    angle: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('angle') }})
    brightness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brightness') }})
    content_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentUri') }})
    contrast: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contrast') }})
    crop_properties: Optional[CropProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cropProperties') }})
    source_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUri') }})
    transparency: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transparency') }})
    
