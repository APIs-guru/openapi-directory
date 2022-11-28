from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RestoreBackupContext:
    r"""RestoreBackupContext
    Database instance restore from backup context. Backup context contains source instance id and project id.
    """
    
    backup_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupRunId') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    
