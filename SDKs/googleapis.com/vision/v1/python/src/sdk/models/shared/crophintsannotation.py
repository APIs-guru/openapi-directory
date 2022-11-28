from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CropHintsAnnotation:
    r"""CropHintsAnnotation
    Set of crop hints that are used to generate new crops when serving images.
    """
    
    crop_hints: Optional[List[CropHint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cropHints') }})
    
