from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import size
from . import affinetransform


@dataclass_json
@dataclass
class PageElementProperties:
    page_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageObjectId' }})
    size: Optional[size.Size] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    transform: Optional[affinetransform.AffineTransform] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transform' }})
    
