from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimension
from . import tablecell
from . import tablerowproperties


@dataclass_json
@dataclass
class TableRow:
    row_height: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowHeight' }})
    table_cells: Optional[List[tablecell.TableCell]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableCells' }})
    table_row_properties: Optional[tablerowproperties.TableRowProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableRowProperties' }})
    
