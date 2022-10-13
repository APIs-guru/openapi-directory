from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1boundingpoly
from . import googleclouddocumentaiv1documenttextanchor

class GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum(str, Enum):
    ORIENTATION_UNSPECIFIED = "ORIENTATION_UNSPECIFIED"
    PAGE_UP = "PAGE_UP"
    PAGE_RIGHT = "PAGE_RIGHT"
    PAGE_DOWN = "PAGE_DOWN"
    PAGE_LEFT = "PAGE_LEFT"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentPageLayout:
    bounding_poly: Optional[googleclouddocumentaiv1boundingpoly.GoogleCloudDocumentaiV1BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingPoly' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    orientation: Optional[GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orientation' }})
    text_anchor: Optional[googleclouddocumentaiv1documenttextanchor.GoogleCloudDocumentaiV1DocumentTextAnchor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textAnchor' }})
    
