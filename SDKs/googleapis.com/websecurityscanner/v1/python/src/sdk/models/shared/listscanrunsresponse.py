from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import scanrun


@dataclass_json
@dataclass
class ListScanRunsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    scan_runs: Optional[List[scanrun.ScanRun]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scanRuns' }})
    
