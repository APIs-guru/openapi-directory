from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DeviceLogLevelEnum(str, Enum):
    LOG_LEVEL_UNSPECIFIED = "LOG_LEVEL_UNSPECIFIED"
    NONE = "NONE"
    ERROR = "ERROR"
    INFO = "INFO"
    DEBUG = "DEBUG"


@dataclass_json
@dataclass
class Device:
    r"""Device
    The device resource.
    """
    
    blocked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    config: Optional[DeviceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    credentials: Optional[List[DeviceCredential]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    gateway_config: Optional[GatewayConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayConfig') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_config_ack_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastConfigAckTime') }})
    last_config_send_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastConfigSendTime') }})
    last_error_status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastErrorStatus') }})
    last_error_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastErrorTime') }})
    last_event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastEventTime') }})
    last_heartbeat_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastHeartbeatTime') }})
    last_state_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastStateTime') }})
    log_level: Optional[DeviceLogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logLevel') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    num_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numId') }})
    state: Optional[DeviceState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
