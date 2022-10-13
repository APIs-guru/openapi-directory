from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import request


@dataclass_json
@dataclass
class BatchUpdateSpreadsheetRequest:
    include_spreadsheet_in_response: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeSpreadsheetInResponse' }})
    requests: Optional[List[request.Request]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    response_include_grid_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseIncludeGridData' }})
    response_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseRanges' }})
    
