from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import transferjob


@dataclass_json
@dataclass
class ListTransferJobsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    transfer_jobs: Optional[List[transferjob.TransferJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferJobs' }})
    
