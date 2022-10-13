from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tile


@dataclass_json
@dataclass
class MosaicLayout:
    columns: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    tiles: Optional[List[tile.Tile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tiles' }})
    
