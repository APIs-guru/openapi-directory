from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MySQLSyncConfig:
    r"""MySQLSyncConfig
    MySQL-specific external server sync settings.
    """
    
    initial_sync_flags: Optional[List[SyncFlags]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialSyncFlags') }})
    
