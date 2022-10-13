from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import pubsubsnapshotmetadata

class SnapshotStateEnum(str, Enum):
    UNKNOWN_SNAPSHOT_STATE = "UNKNOWN_SNAPSHOT_STATE"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    READY = "READY"
    FAILED = "FAILED"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class Snapshot:
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disk_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSizeBytes' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    pubsub_metadata: Optional[List[pubsubsnapshotmetadata.PubsubSnapshotMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubMetadata' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    source_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceJobId' }})
    state: Optional[SnapshotStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    
