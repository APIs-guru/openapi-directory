from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import block
from . import textproperty


@dataclass_json
@dataclass
class Page:
    blocks: Optional[List[block.Block]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocks' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    property: Optional[textproperty.TextProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'property' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
