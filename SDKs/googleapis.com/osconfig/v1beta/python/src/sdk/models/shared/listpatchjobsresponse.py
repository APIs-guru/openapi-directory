from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import patchjob


@dataclass_json
@dataclass
class ListPatchJobsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    patch_jobs: Optional[List[patchjob.PatchJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patchJobs' }})
    
