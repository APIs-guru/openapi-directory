from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RestoreInfoSourceTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    BACKUP = "BACKUP"


@dataclass_json
@dataclass
class RestoreInfo:
    r"""RestoreInfo
    Information about the database restore.
    """
    
    backup_info: Optional[BackupInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupInfo') }})
    source_type: Optional[RestoreInfoSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceType') }})
    
