from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GroupedResult:
    r"""GroupedResult
    Information about the products similar to a single product in a query image.
    """
    
    bounding_poly: Optional[BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPoly') }})
    object_annotations: Optional[List[ObjectAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectAnnotations') }})
    results: Optional[List[Result]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
