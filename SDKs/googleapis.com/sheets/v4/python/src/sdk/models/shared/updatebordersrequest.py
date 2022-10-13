from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import border
from . import border
from . import border
from . import border
from . import gridrange
from . import border
from . import border


@dataclass_json
@dataclass
class UpdateBordersRequest:
    bottom: Optional[border.Border] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bottom' }})
    inner_horizontal: Optional[border.Border] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'innerHorizontal' }})
    inner_vertical: Optional[border.Border] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'innerVertical' }})
    left: Optional[border.Border] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'left' }})
    range: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    right: Optional[border.Border] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'right' }})
    top: Optional[border.Border] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'top' }})
    
