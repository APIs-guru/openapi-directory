from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageAnnotation:
    r"""ImageAnnotation
    Image annotation.
    """
    
    bounding_polys: Optional[List[BoundingPoly]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPolys') }})
    frame_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameIndex') }})
    
