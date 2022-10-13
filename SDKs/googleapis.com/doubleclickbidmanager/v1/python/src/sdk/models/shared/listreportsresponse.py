from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import report


@dataclass_json
@dataclass
class ListReportsResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    reports: Optional[List[report.Report]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reports' }})
    
