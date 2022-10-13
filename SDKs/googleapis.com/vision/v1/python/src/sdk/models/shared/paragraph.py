from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import boundingpoly
from . import textproperty
from . import word


@dataclass_json
@dataclass
class Paragraph:
    bounding_box: Optional[boundingpoly.BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingBox' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    property: Optional[textproperty.TextProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'property' }})
    words: Optional[List[word.Word]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'words' }})
    
