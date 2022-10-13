from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import matchedvaluerange


@dataclass_json
@dataclass
class BatchGetValuesByDataFilterResponse:
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spreadsheetId' }})
    value_ranges: Optional[List[matchedvaluerange.MatchedValueRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueRanges' }})
    
