from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tablecelllocation


@dataclass_json
@dataclass
class InsertTableRowRequest:
    insert_below: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertBelow' }})
    table_cell_location: Optional[tablecelllocation.TableCellLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableCellLocation' }})
    
