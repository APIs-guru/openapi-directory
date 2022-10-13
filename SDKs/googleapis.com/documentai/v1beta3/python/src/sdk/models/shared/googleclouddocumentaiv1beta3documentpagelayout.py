from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3boundingpoly
from . import googleclouddocumentaiv1beta3documenttextanchor

class GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnum(str, Enum):
    ORIENTATION_UNSPECIFIED = "ORIENTATION_UNSPECIFIED"
    PAGE_UP = "PAGE_UP"
    PAGE_RIGHT = "PAGE_RIGHT"
    PAGE_DOWN = "PAGE_DOWN"
    PAGE_LEFT = "PAGE_LEFT"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentPageLayout:
    bounding_poly: Optional[googleclouddocumentaiv1beta3boundingpoly.GoogleCloudDocumentaiV1beta3BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingPoly' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    orientation: Optional[GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orientation' }})
    text_anchor: Optional[googleclouddocumentaiv1beta3documenttextanchor.GoogleCloudDocumentaiV1beta3DocumentTextAnchor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textAnchor' }})
    
