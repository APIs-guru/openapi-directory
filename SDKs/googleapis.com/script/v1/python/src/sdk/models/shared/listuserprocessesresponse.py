from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappsscripttypeprocess


@dataclass_json
@dataclass
class ListUserProcessesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    processes: Optional[List[googleappsscripttypeprocess.GoogleAppsScriptTypeProcess]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processes' }})
    
