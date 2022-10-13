from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tablecellproperties
from . import tablerange


@dataclass_json
@dataclass
class UpdateTableCellPropertiesRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    table_cell_properties: Optional[tablecellproperties.TableCellProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableCellProperties' }})
    table_range: Optional[tablerange.TableRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableRange' }})
    
