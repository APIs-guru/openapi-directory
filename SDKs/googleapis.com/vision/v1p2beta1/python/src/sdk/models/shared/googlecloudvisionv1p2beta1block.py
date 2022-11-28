from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GoogleCloudVisionV1p2beta1Block
    Logical element on the page.
    """
    
    block_type: Optional[GoogleCloudVisionV1p2beta1BlockBlockTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockType') }})
    bounding_box: Optional[GoogleCloudVisionV1p2beta1BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingBox') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    paragraphs: Optional[List[GoogleCloudVisionV1p2beta1Paragraph]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paragraphs') }})
    property: Optional[GoogleCloudVisionV1p2beta1TextAnnotationTextProperty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    
