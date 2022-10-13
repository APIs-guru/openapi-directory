from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import boundingbox


@dataclass_json
@dataclass
class Prediction:
    bounding_box: Optional[boundingbox.BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingBox' }})
    probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probability' }})
    tag_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagId' }})
    tag_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagName' }})
    
