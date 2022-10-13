from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import approvalresult


@dataclass_json
@dataclass
class ApproveBuildRequest:
    approval_result: Optional[approvalresult.ApprovalResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalResult' }})
    
