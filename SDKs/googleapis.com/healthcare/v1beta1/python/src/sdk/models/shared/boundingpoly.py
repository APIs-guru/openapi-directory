from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import vertex


@dataclass_json
@dataclass
class BoundingPoly:
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    vertices: Optional[List[vertex.Vertex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vertices' }})
    
