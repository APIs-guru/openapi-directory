from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1normalizedvertex
from . import googleclouddocumentaiv1vertex


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1BoundingPoly:
    normalized_vertices: Optional[List[googleclouddocumentaiv1normalizedvertex.GoogleCloudDocumentaiV1NormalizedVertex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'normalizedVertices' }})
    vertices: Optional[List[googleclouddocumentaiv1vertex.GoogleCloudDocumentaiV1Vertex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vertices' }})
    
