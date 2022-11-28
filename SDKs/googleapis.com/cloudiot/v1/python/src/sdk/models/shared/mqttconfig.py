from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MqttConfigMqttEnabledStateEnum(str, Enum):
    MQTT_STATE_UNSPECIFIED = "MQTT_STATE_UNSPECIFIED"
    MQTT_ENABLED = "MQTT_ENABLED"
    MQTT_DISABLED = "MQTT_DISABLED"


@dataclass_json
@dataclass
class MqttConfig:
    r"""MqttConfig
    The configuration of MQTT for a device registry.
    """
    
    mqtt_enabled_state: Optional[MqttConfigMqttEnabledStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mqttEnabledState') }})
    
