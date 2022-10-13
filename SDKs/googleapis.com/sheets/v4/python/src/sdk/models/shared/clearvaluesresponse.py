from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClearValuesResponse:
    cleared_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clearedRange' }})
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spreadsheetId' }})
    
