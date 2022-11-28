from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StreamingApplianceSnapshotConfig:
    r"""StreamingApplianceSnapshotConfig
    Streaming appliance snapshot configuration.
    """
    
    import_state_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importStateEndpoint') }})
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotId') }})
    
