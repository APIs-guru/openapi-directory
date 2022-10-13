from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import utilizationreport


@dataclass_json
@dataclass
class ListUtilizationReportsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    utilization_reports: Optional[List[utilizationreport.UtilizationReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utilizationReports' }})
    
