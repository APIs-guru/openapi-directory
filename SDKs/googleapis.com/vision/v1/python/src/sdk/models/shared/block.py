from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BlockBlockTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    TEXT = "TEXT"
    TABLE = "TABLE"
    PICTURE = "PICTURE"
    RULER = "RULER"
    BARCODE = "BARCODE"


@dataclass_json
@dataclass
class Block:
    r"""Block
    Logical element on the page.
    """
    
    block_type: Optional[BlockBlockTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockType') }})
    bounding_box: Optional[BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingBox') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    paragraphs: Optional[List[Paragraph]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paragraphs') }})
    property: Optional[TextProperty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    
