from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tablecelllocation
from . import tablecellproperties
from . import textcontent


@dataclass_json
@dataclass
class TableCell:
    column_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnSpan' }})
    location: Optional[tablecelllocation.TableCellLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    row_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowSpan' }})
    table_cell_properties: Optional[tablecellproperties.TableCellProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableCellProperties' }})
    text: Optional[textcontent.TextContent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
