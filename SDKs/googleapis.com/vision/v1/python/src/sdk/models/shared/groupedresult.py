from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import boundingpoly
from . import objectannotation
from . import result


@dataclass_json
@dataclass
class GroupedResult:
    bounding_poly: Optional[boundingpoly.BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingPoly' }})
    object_annotations: Optional[List[objectannotation.ObjectAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectAnnotations' }})
    results: Optional[List[result.Result]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
