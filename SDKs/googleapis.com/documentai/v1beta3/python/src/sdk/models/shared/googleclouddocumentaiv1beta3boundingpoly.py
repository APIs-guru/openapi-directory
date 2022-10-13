from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3normalizedvertex
from . import googleclouddocumentaiv1beta3vertex


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3BoundingPoly:
    normalized_vertices: Optional[List[googleclouddocumentaiv1beta3normalizedvertex.GoogleCloudDocumentaiV1beta3NormalizedVertex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'normalizedVertices' }})
    vertices: Optional[List[googleclouddocumentaiv1beta3vertex.GoogleCloudDocumentaiV1beta3Vertex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vertices' }})
    
