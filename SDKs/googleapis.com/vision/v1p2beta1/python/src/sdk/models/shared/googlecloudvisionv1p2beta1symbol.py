from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p2beta1boundingpoly
from . import googlecloudvisionv1p2beta1textannotationtextproperty


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1Symbol:
    bounding_box: Optional[googlecloudvisionv1p2beta1boundingpoly.GoogleCloudVisionV1p2beta1BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingBox' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    property: Optional[googlecloudvisionv1p2beta1textannotationtextproperty.GoogleCloudVisionV1p2beta1TextAnnotationTextProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'property' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
