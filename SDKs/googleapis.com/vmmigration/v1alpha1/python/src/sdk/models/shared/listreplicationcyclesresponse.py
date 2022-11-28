from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListReplicationCyclesResponse:
    r"""ListReplicationCyclesResponse
    Response message for 'ListReplicationCycles' request.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    replication_cycles: Optional[List[ReplicationCycle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationCycles') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
