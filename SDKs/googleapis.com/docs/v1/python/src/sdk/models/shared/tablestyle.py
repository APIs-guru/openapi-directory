from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tablecolumnproperties


@dataclass_json
@dataclass
class TableStyle:
    table_column_properties: Optional[List[tablecolumnproperties.TableColumnProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableColumnProperties' }})
    
