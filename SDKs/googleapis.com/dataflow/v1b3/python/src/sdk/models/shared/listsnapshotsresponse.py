from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSnapshotsResponse:
    r"""ListSnapshotsResponse
    List of snapshots.
    """
    
    snapshots: Optional[List[Snapshot]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshots') }})
    
