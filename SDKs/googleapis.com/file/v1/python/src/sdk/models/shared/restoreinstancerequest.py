from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RestoreInstanceRequest:
    r"""RestoreInstanceRequest
    RestoreInstanceRequest restores an existing instance's file share from a backup.
    """
    
    file_share: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileShare') }})
    source_backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceBackup') }})
    
