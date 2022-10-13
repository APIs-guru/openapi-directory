from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3boundingpoly

class GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnum(str, Enum):
    LAYOUT_TYPE_UNSPECIFIED = "LAYOUT_TYPE_UNSPECIFIED"
    BLOCK = "BLOCK"
    PARAGRAPH = "PARAGRAPH"
    LINE = "LINE"
    TOKEN = "TOKEN"
    VISUAL_ELEMENT = "VISUAL_ELEMENT"
    TABLE = "TABLE"
    FORM_FIELD = "FORM_FIELD"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef:
    bounding_poly: Optional[googleclouddocumentaiv1beta3boundingpoly.GoogleCloudDocumentaiV1beta3BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingPoly' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    layout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layoutId' }})
    layout_type: Optional[GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layoutType' }})
    page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    
