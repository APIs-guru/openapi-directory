from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import importjob


@dataclass_json
@dataclass
class ListImportJobsResponse:
    import_jobs: Optional[List[importjob.ImportJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importJobs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
