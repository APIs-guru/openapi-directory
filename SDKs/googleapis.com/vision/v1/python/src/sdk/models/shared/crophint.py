from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CropHint:
    r"""CropHint
    Single crop hint that is used to generate a new crop when serving an image.
    """
    
    bounding_poly: Optional[BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPoly') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    importance_fraction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importanceFraction') }})
    
