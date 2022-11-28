from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SaveSnapshotRequest:
    r"""SaveSnapshotRequest
    Request to create a snapshot of a Cloud Composer environment.
    """
    
    snapshot_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotLocation') }})
    
