from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import valuerange


@dataclass_json
@dataclass
class UpdateValuesResponse:
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spreadsheetId' }})
    updated_cells: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedCells' }})
    updated_columns: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedColumns' }})
    updated_data: Optional[valuerange.ValueRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedData' }})
    updated_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedRange' }})
    updated_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedRows' }})
    
