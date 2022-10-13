from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import widget


@dataclass_json
@dataclass
class Tile:
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    widget: Optional[widget.Widget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'widget' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    x_pos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xPos' }})
    y_pos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yPos' }})
    
