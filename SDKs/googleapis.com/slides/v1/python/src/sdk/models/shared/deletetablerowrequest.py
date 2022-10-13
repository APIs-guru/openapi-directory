from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tablecelllocation


@dataclass_json
@dataclass
class DeleteTableRowRequest:
    cell_location: Optional[tablecelllocation.TableCellLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cellLocation' }})
    table_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableObjectId' }})
    
