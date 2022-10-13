from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import border
from . import border
from . import border
from . import border


@dataclass_json
@dataclass
class Borders:
    bottom: Optional[border.Border] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bottom' }})
    left: Optional[border.Border] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'left' }})
    right: Optional[border.Border] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'right' }})
    top: Optional[border.Border] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'top' }})
    
