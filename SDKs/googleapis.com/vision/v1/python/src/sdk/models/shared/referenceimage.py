from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReferenceImage:
    r"""ReferenceImage
    A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.
    """
    
    bounding_polys: Optional[List[BoundingPoly]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPolys') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
