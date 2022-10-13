from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta2normalizedvertex
from . import googleclouddocumentaiv1beta2vertex


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2BoundingPoly:
    normalized_vertices: Optional[List[googleclouddocumentaiv1beta2normalizedvertex.GoogleCloudDocumentaiV1beta2NormalizedVertex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'normalizedVertices' }})
    vertices: Optional[List[googleclouddocumentaiv1beta2vertex.GoogleCloudDocumentaiV1beta2Vertex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vertices' }})
    
