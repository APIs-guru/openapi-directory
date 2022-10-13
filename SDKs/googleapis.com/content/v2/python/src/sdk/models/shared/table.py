from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import headers
from . import headers
from . import row


@dataclass_json
@dataclass
class Table:
    column_headers: Optional[headers.Headers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnHeaders' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    row_headers: Optional[headers.Headers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowHeaders' }})
    rows: Optional[List[row.Row]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    
