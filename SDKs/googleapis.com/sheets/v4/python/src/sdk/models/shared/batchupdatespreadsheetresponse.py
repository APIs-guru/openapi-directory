from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import response
from . import spreadsheet


@dataclass_json
@dataclass
class BatchUpdateSpreadsheetResponse:
    replies: Optional[List[response.Response]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replies' }})
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spreadsheetId' }})
    updated_spreadsheet: Optional[spreadsheet.Spreadsheet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedSpreadsheet' }})
    
