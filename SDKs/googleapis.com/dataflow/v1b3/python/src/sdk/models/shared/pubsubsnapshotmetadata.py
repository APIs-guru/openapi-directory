from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PubsubSnapshotMetadata:
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    snapshot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotName' }})
    topic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicName' }})
    
