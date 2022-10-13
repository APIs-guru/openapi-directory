from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import deviceconfig
from . import devicecredential
from . import gatewayconfig
from . import status
from . import devicestate

class DeviceLogLevelEnum(str, Enum):
    LOG_LEVEL_UNSPECIFIED = "LOG_LEVEL_UNSPECIFIED"
    NONE = "NONE"
    ERROR = "ERROR"
    INFO = "INFO"
    DEBUG = "DEBUG"


@dataclass_json
@dataclass
class Device:
    blocked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocked' }})
    config: Optional[deviceconfig.DeviceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    credentials: Optional[List[devicecredential.DeviceCredential]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    gateway_config: Optional[gatewayconfig.GatewayConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayConfig' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_config_ack_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastConfigAckTime' }})
    last_config_send_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastConfigSendTime' }})
    last_error_status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastErrorStatus' }})
    last_error_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastErrorTime' }})
    last_event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastEventTime' }})
    last_heartbeat_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastHeartbeatTime' }})
    last_state_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStateTime' }})
    log_level: Optional[DeviceLogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logLevel' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    num_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numId' }})
    state: Optional[devicestate.DeviceState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
