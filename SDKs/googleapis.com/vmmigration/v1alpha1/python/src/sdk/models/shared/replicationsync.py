from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReplicationSync:
    r"""ReplicationSync
    ReplicationSync contain information about the last replica sync to the cloud.
    """
    
    last_sync_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSyncTime') }})
    
