from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StreamingApplianceSnapshotConfig:
    import_state_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importStateEndpoint' }})
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotId' }})
    
