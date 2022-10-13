from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import registrycredential
from . import eventnotificationconfig
from . import httpconfig
from . import mqttconfig
from . import statenotificationconfig

class DeviceRegistryLogLevelEnum(str, Enum):
    LOG_LEVEL_UNSPECIFIED = "LOG_LEVEL_UNSPECIFIED"
    NONE = "NONE"
    ERROR = "ERROR"
    INFO = "INFO"
    DEBUG = "DEBUG"


@dataclass_json
@dataclass
class DeviceRegistry:
    credentials: Optional[List[registrycredential.RegistryCredential]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    event_notification_configs: Optional[List[eventnotificationconfig.EventNotificationConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventNotificationConfigs' }})
    http_config: Optional[httpconfig.HTTPConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpConfig' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    log_level: Optional[DeviceRegistryLogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logLevel' }})
    mqtt_config: Optional[mqttconfig.MqttConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mqttConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state_notification_config: Optional[statenotificationconfig.StateNotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateNotificationConfig' }})
    
