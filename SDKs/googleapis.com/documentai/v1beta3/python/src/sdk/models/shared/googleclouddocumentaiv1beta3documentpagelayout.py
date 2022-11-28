from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnum(str, Enum):
    ORIENTATION_UNSPECIFIED = "ORIENTATION_UNSPECIFIED"
    PAGE_UP = "PAGE_UP"
    PAGE_RIGHT = "PAGE_RIGHT"
    PAGE_DOWN = "PAGE_DOWN"
    PAGE_LEFT = "PAGE_LEFT"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentPageLayout:
    r"""GoogleCloudDocumentaiV1beta3DocumentPageLayout
    Visual element describing a layout unit on a page.
    """
    
    bounding_poly: Optional[GoogleCloudDocumentaiV1beta3BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPoly') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    orientation: Optional[GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orientation') }})
    text_anchor: Optional[GoogleCloudDocumentaiV1beta3DocumentTextAnchor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textAnchor') }})
    
