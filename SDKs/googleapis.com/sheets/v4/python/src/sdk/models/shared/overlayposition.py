from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gridcoordinate


@dataclass_json
@dataclass
class OverlayPosition:
    anchor_cell: Optional[gridcoordinate.GridCoordinate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anchorCell' }})
    height_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heightPixels' }})
    offset_x_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offsetXPixels' }})
    offset_y_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offsetYPixels' }})
    width_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'widthPixels' }})
    
