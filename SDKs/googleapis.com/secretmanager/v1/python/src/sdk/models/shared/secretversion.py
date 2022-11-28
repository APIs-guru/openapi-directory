from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SecretVersionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    DESTROYED = "DESTROYED"


@dataclass_json
@dataclass
class SecretVersion:
    r"""SecretVersion
    A secret version resource in the Secret Manager API.
    """
    
    client_specified_payload_checksum: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSpecifiedPayloadChecksum') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    destroy_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destroyTime') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    replication_status: Optional[ReplicationStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationStatus') }})
    state: Optional[SecretVersionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
