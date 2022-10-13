from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GridProperties:
    column_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnCount' }})
    column_group_control_after: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnGroupControlAfter' }})
    frozen_column_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frozenColumnCount' }})
    frozen_row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frozenRowCount' }})
    hide_gridlines: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideGridlines' }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowCount' }})
    row_group_control_after: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowGroupControlAfter' }})
    
