from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1DominantColorsAnnotation:
    r"""GoogleCloudVisionV1p2beta1DominantColorsAnnotation
    Set of dominant colors and their corresponding scores.
    """
    
    colors: Optional[List[GoogleCloudVisionV1p2beta1ColorInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colors') }})
    
