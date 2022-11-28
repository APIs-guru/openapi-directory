from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageProperties:
    r"""ImageProperties
    Stores image properties, such as dominant colors.
    """
    
    dominant_colors: Optional[DominantColorsAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dominantColors') }})
    
