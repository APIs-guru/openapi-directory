from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tablecellstyle
from . import tablerange
from . import location


@dataclass_json
@dataclass
class UpdateTableCellStyleRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    table_cell_style: Optional[tablecellstyle.TableCellStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableCellStyle' }})
    table_range: Optional[tablerange.TableRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableRange' }})
    table_start_location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableStartLocation' }})
    
