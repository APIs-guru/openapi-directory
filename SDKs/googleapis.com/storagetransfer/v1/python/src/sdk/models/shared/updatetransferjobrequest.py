from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import transferjob


@dataclass_json
@dataclass
class UpdateTransferJobRequest:
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    transfer_job: Optional[transferjob.TransferJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferJob' }})
    update_transfer_job_field_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTransferJobFieldMask' }})
    
