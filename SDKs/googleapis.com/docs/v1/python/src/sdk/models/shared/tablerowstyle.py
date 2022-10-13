from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dimension


@dataclass_json
@dataclass
class TableRowStyle:
    min_row_height: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minRowHeight' }})
    prevent_overflow: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preventOverflow' }})
    table_header: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableHeader' }})
    
