from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p2beta1boundingpoly


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1CropHint:
    bounding_poly: Optional[googlecloudvisionv1p2beta1boundingpoly.GoogleCloudVisionV1p2beta1BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingPoly' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    importance_fraction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importanceFraction' }})
    
