from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import updatevaluesresponse


@dataclass_json
@dataclass
class AppendValuesResponse:
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spreadsheetId' }})
    table_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableRange' }})
    updates: Optional[updatevaluesresponse.UpdateValuesResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updates' }})
    
