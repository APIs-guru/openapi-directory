from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p2beta1block
from . import googlecloudvisionv1p2beta1textannotationtextproperty


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1Page:
    blocks: Optional[List[googlecloudvisionv1p2beta1block.GoogleCloudVisionV1p2beta1Block]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocks' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    property: Optional[googlecloudvisionv1p2beta1textannotationtextproperty.GoogleCloudVisionV1p2beta1TextAnnotationTextProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'property' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
