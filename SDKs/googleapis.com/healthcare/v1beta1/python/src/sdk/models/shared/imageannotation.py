from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import boundingpoly


@dataclass_json
@dataclass
class ImageAnnotation:
    bounding_polys: Optional[List[boundingpoly.BoundingPoly]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingPolys' }})
    frame_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frameIndex' }})
    
