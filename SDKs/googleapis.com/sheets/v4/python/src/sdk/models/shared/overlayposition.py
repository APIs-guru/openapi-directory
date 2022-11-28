from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OverlayPosition:
    r"""OverlayPosition
    The location an object is overlaid on top of a grid.
    """
    
    anchor_cell: Optional[GridCoordinate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anchorCell') }})
    height_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heightPixels') }})
    offset_x_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offsetXPixels') }})
    offset_y_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offsetYPixels') }})
    width_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('widthPixels') }})
    
