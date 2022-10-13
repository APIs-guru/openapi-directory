from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dimension


@dataclass_json
@dataclass
class TableColumnProperties:
    column_width: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnWidth' }})
    
