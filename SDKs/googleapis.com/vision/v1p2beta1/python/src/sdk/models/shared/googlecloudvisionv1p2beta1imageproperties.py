from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1ImageProperties:
    r"""GoogleCloudVisionV1p2beta1ImageProperties
    Stores image properties, such as dominant colors.
    """
    
    dominant_colors: Optional[GoogleCloudVisionV1p2beta1DominantColorsAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dominantColors') }})
    
