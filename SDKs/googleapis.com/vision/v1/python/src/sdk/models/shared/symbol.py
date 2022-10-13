from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import boundingpoly
from . import textproperty


@dataclass_json
@dataclass
class Symbol:
    bounding_box: Optional[boundingpoly.BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingBox' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    property: Optional[textproperty.TextProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'property' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
