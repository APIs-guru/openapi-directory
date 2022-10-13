from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import replicationstatus

class SecretVersionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    DESTROYED = "DESTROYED"


@dataclass_json
@dataclass
class SecretVersion:
    client_specified_payload_checksum: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSpecifiedPayloadChecksum' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    destroy_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destroyTime' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    replication_status: Optional[replicationstatus.ReplicationStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationStatus' }})
    state: Optional[SecretVersionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
