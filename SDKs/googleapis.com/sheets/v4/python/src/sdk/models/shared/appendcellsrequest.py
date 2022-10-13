from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rowdata


@dataclass_json
@dataclass
class AppendCellsRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    rows: Optional[List[rowdata.RowData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheetId' }})
    
