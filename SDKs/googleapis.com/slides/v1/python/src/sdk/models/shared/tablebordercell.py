from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tablecelllocation
from . import tableborderproperties


@dataclass_json
@dataclass
class TableBorderCell:
    location: Optional[tablecelllocation.TableCellLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    table_border_properties: Optional[tableborderproperties.TableBorderProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableBorderProperties' }})
    
