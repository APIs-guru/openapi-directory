from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import job


@dataclass_json
@dataclass
class UpdateJobRequest:
    job: Optional[job.Job] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
