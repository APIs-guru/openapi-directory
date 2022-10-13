from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import backfillallstrategy
from . import destinationconfig
from . import error
from . import sourceconfig

class StreamStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATED = "CREATED"
    RUNNING = "RUNNING"
    PAUSED = "PAUSED"
    MAINTENANCE = "MAINTENANCE"
    FAILED = "FAILED"
    FAILED_PERMANENTLY = "FAILED_PERMANENTLY"
    STARTING = "STARTING"
    DRAINING = "DRAINING"


@dataclass_json
@dataclass
class Stream:
    backfill_all: Optional[backfillallstrategy.BackfillAllStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backfillAll' }})
    backfill_none: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backfillNone' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    customer_managed_encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerManagedEncryptionKey' }})
    destination_config: Optional[destinationconfig.DestinationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationConfig' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source_config: Optional[sourceconfig.SourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceConfig' }})
    state: Optional[StreamStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
