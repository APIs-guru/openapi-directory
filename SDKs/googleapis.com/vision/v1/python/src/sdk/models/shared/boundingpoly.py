from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import normalizedvertex
from . import vertex


@dataclass_json
@dataclass
class BoundingPoly:
    normalized_vertices: Optional[List[normalizedvertex.NormalizedVertex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'normalizedVertices' }})
    vertices: Optional[List[vertex.Vertex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vertices' }})
    
