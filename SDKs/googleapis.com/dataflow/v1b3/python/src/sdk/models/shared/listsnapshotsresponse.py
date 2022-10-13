from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import snapshot


@dataclass_json
@dataclass
class ListSnapshotsResponse:
    snapshots: Optional[List[snapshot.Snapshot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshots' }})
    
