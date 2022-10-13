from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tablecolumnproperties
from . import location


@dataclass_json
@dataclass
class UpdateTableColumnPropertiesRequest:
    column_indices: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnIndices' }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    table_column_properties: Optional[tablecolumnproperties.TableColumnProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableColumnProperties' }})
    table_start_location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableStartLocation' }})
    
