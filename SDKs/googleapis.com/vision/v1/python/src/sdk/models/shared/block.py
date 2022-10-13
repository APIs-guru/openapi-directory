from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import boundingpoly
from . import paragraph
from . import textproperty

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
    block_type: Optional[BlockBlockTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockType' }})
    bounding_box: Optional[boundingpoly.BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingBox' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    paragraphs: Optional[List[paragraph.Paragraph]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paragraphs' }})
    property: Optional[textproperty.TextProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'property' }})
    
