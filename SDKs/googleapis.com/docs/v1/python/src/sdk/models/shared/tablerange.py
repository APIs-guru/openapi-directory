from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tablecelllocation


@dataclass_json
@dataclass
class TableRange:
    column_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnSpan' }})
    row_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowSpan' }})
    table_cell_location: Optional[tablecelllocation.TableCellLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableCellLocation' }})
    
