from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import valuerange


@dataclass_json
@dataclass
class BatchGetValuesResponse:
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spreadsheetId' }})
    value_ranges: Optional[List[valuerange.ValueRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueRanges' }})
    
