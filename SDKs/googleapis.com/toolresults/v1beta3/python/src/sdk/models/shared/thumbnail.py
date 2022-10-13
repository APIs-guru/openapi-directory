from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Thumbnail:
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentType' }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    height_px: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heightPx' }})
    width_px: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'widthPx' }})
    
