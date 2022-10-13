from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tablerowproperties


@dataclass_json
@dataclass
class UpdateTableRowPropertiesRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    row_indices: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowIndices' }})
    table_row_properties: Optional[tablerowproperties.TableRowProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableRowProperties' }})
    
