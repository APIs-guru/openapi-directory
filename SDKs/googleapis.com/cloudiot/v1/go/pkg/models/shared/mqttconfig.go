package shared

type MqttConfigMqttEnabledStateEnum string

const (
	MqttConfigMqttEnabledStateEnumMqttStateUnspecified MqttConfigMqttEnabledStateEnum = "MQTT_STATE_UNSPECIFIED"
	MqttConfigMqttEnabledStateEnumMqttEnabled          MqttConfigMqttEnabledStateEnum = "MQTT_ENABLED"
	MqttConfigMqttEnabledStateEnumMqttDisabled         MqttConfigMqttEnabledStateEnum = "MQTT_DISABLED"
)

// MqttConfig
// The configuration of MQTT for a device registry.
type MqttConfig struct {
	MqttEnabledState *MqttConfigMqttEnabledStateEnum `json:"mqttEnabledState,omitempty"`
}
