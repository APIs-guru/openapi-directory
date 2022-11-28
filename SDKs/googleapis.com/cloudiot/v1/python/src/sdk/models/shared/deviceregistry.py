from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DeviceRegistryLogLevelEnum(str, Enum):
    LOG_LEVEL_UNSPECIFIED = "LOG_LEVEL_UNSPECIFIED"
    NONE = "NONE"
    ERROR = "ERROR"
    INFO = "INFO"
    DEBUG = "DEBUG"


@dataclass_json
@dataclass
class DeviceRegistry:
    r"""DeviceRegistry
    A container for a group of devices.
    """
    
    credentials: Optional[List[RegistryCredential]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    event_notification_configs: Optional[List[EventNotificationConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventNotificationConfigs') }})
    http_config: Optional[HTTPConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpConfig') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    log_level: Optional[DeviceRegistryLogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logLevel') }})
    mqtt_config: Optional[MqttConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mqttConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state_notification_config: Optional[StateNotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateNotificationConfig') }})
    
