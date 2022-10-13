from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p1beta1boundingpoly
from . import googlecloudvisionv1p1beta1textannotationtextproperty
from . import googlecloudvisionv1p1beta1symbol


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1Word:
    bounding_box: Optional[googlecloudvisionv1p1beta1boundingpoly.GoogleCloudVisionV1p1beta1BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingBox' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    property: Optional[googlecloudvisionv1p1beta1textannotationtextproperty.GoogleCloudVisionV1p1beta1TextAnnotationTextProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'property' }})
    symbols: Optional[List[googlecloudvisionv1p1beta1symbol.GoogleCloudVisionV1p1beta1Symbol]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'symbols' }})
    
