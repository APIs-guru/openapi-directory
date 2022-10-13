from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import celldata
from . import gridrange


@dataclass_json
@dataclass
class RepeatCellRequest:
    cell: Optional[celldata.CellData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cell' }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    range: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
