from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tablerowstyle
from . import location


@dataclass_json
@dataclass
class UpdateTableRowStyleRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    row_indices: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowIndices' }})
    table_row_style: Optional[tablerowstyle.TableRowStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableRowStyle' }})
    table_start_location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableStartLocation' }})
    
