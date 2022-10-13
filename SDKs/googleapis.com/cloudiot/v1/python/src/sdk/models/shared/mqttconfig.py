from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MqttConfigMqttEnabledStateEnum(str, Enum):
    MQTT_STATE_UNSPECIFIED = "MQTT_STATE_UNSPECIFIED"
    MQTT_ENABLED = "MQTT_ENABLED"
    MQTT_DISABLED = "MQTT_DISABLED"


@dataclass_json
@dataclass
class MqttConfig:
    mqtt_enabled_state: Optional[MqttConfigMqttEnabledStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mqttEnabledState' }})
    
