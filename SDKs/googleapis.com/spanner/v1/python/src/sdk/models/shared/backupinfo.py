from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BackupInfo:
    r"""BackupInfo
    Information about a backup.
    """
    
    backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    source_database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDatabase') }})
    version_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionTime') }})
    
