from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import location


@dataclass_json
@dataclass
class TableCellLocation:
    column_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnIndex' }})
    row_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowIndex' }})
    table_start_location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableStartLocation' }})
    
