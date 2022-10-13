from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p1beta1normalizedvertex
from . import googlecloudvisionv1p1beta1vertex


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1BoundingPoly:
    normalized_vertices: Optional[List[googlecloudvisionv1p1beta1normalizedvertex.GoogleCloudVisionV1p1beta1NormalizedVertex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'normalizedVertices' }})
    vertices: Optional[List[googlecloudvisionv1p1beta1vertex.GoogleCloudVisionV1p1beta1Vertex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vertices' }})
    
