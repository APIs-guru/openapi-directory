from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cutoverjob


@dataclass_json
@dataclass
class ListCutoverJobsResponse:
    cutover_jobs: Optional[List[cutoverjob.CutoverJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cutoverJobs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
