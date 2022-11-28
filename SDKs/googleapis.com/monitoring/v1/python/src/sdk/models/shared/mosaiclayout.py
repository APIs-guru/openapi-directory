from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MosaicLayout:
    r"""MosaicLayout
    A mosaic layout divides the available space into a grid of blocks, and overlays the grid with tiles. Unlike GridLayout, tiles may span multiple grid blocks and can be placed at arbitrary locations in the grid.
    """
    
    columns: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    tiles: Optional[List[Tile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiles') }})
    
