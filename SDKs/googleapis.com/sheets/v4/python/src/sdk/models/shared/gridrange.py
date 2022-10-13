from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GridRange:
    end_column_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endColumnIndex' }})
    end_row_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endRowIndex' }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheetId' }})
    start_column_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startColumnIndex' }})
    start_row_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startRowIndex' }})
    
