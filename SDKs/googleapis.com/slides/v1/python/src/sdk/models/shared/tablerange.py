from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tablecelllocation


@dataclass_json
@dataclass
class TableRange:
    column_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnSpan' }})
    location: Optional[tablecelllocation.TableCellLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    row_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowSpan' }})
    
