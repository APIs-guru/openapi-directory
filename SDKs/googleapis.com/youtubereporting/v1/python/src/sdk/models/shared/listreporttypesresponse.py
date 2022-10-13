from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reporttype


@dataclass_json
@dataclass
class ListReportTypesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    report_types: Optional[List[reporttype.ReportType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTypes' }})
    
