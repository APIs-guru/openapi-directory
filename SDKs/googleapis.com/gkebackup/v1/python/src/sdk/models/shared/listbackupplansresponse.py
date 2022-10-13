from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import backupplan


@dataclass_json
@dataclass
class ListBackupPlansResponse:
    backup_plans: Optional[List[backupplan.BackupPlan]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupPlans' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
