from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import syncflags


@dataclass_json
@dataclass
class MySQLSyncConfig:
    initial_sync_flags: Optional[List[syncflags.SyncFlags]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialSyncFlags' }})
    
