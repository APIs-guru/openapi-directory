from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tablecolumnproperties


@dataclass_json
@dataclass
class UpdateTableColumnPropertiesRequest:
    column_indices: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnIndices' }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    table_column_properties: Optional[tablecolumnproperties.TableColumnProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableColumnProperties' }})
    
