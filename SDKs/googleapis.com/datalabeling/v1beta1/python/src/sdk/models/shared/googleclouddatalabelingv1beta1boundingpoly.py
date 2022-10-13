from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1vertex


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1BoundingPoly:
    vertices: Optional[List[googleclouddatalabelingv1beta1vertex.GoogleCloudDatalabelingV1beta1Vertex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vertices' }})
    
