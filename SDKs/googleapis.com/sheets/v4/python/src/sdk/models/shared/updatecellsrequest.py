from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gridrange
from . import rowdata
from . import gridcoordinate


@dataclass_json
@dataclass
class UpdateCellsRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    range: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    rows: Optional[List[rowdata.RowData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    start: Optional[gridcoordinate.GridCoordinate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    
