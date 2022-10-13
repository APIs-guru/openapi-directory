from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import patchjobinstancedetails


@dataclass_json
@dataclass
class ListPatchJobInstanceDetailsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    patch_job_instance_details: Optional[List[patchjobinstancedetails.PatchJobInstanceDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patchJobInstanceDetails' }})
    
