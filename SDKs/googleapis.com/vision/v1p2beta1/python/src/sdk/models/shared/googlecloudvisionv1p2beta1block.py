from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p2beta1boundingpoly
from . import googlecloudvisionv1p2beta1paragraph
from . import googlecloudvisionv1p2beta1textannotationtextproperty

class GoogleCloudVisionV1p2beta1BlockBlockTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    TEXT = "TEXT"
    TABLE = "TABLE"
    PICTURE = "PICTURE"
    RULER = "RULER"
    BARCODE = "BARCODE"


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1Block:
    block_type: Optional[GoogleCloudVisionV1p2beta1BlockBlockTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockType' }})
    bounding_box: Optional[googlecloudvisionv1p2beta1boundingpoly.GoogleCloudVisionV1p2beta1BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingBox' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    paragraphs: Optional[List[googlecloudvisionv1p2beta1paragraph.GoogleCloudVisionV1p2beta1Paragraph]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paragraphs' }})
    property: Optional[googlecloudvisionv1p2beta1textannotationtextproperty.GoogleCloudVisionV1p2beta1TextAnnotationTextProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'property' }})
    
