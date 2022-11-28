from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef
    Represents a weak reference to a page element within a document.
    """
    
    bounding_poly: Optional[GoogleCloudDocumentaiV1beta3BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPoly') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    layout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layoutId') }})
    layout_type: Optional[GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layoutType') }})
    page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
