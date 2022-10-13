from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1normalizedvertex


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1NormalizedPolyline:
    normalized_vertices: Optional[List[googleclouddatalabelingv1beta1normalizedvertex.GoogleCloudDatalabelingV1beta1NormalizedVertex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'normalizedVertices' }})
    
