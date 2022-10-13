from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegionProto:
    height_px: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heightPx' }})
    left_px: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leftPx' }})
    top_px: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topPx' }})
    width_px: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'widthPx' }})
    
