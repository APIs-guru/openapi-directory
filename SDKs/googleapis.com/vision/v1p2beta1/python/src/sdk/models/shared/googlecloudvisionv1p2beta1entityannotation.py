from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p2beta1boundingpoly
from . import googlecloudvisionv1p2beta1locationinfo
from . import googlecloudvisionv1p2beta1property


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1EntityAnnotation:
    bounding_poly: Optional[googlecloudvisionv1p2beta1boundingpoly.GoogleCloudVisionV1p2beta1BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingPoly' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    locations: Optional[List[googlecloudvisionv1p2beta1locationinfo.GoogleCloudVisionV1p2beta1LocationInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    mid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mid' }})
    properties: Optional[List[googlecloudvisionv1p2beta1property.GoogleCloudVisionV1p2beta1Property]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    topicality: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicality' }})
    
