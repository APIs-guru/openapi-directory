package shared

type MqttConfigMqttEnabledStateEnum string

const (
	MqttConfigMqttEnabledStateEnumMqttStateUnspecified MqttConfigMqttEnabledStateEnum = "MQTT_STATE_UNSPECIFIED"
	MqttConfigMqttEnabledStateEnumMqttEnabled          MqttConfigMqttEnabledStateEnum = "MQTT_ENABLED"
	MqttConfigMqttEnabledStateEnumMqttDisabled         MqttConfigMqttEnabledStateEnum = "MQTT_DISABLED"
)

type MqttConfig struct {
	MqttEnabledState *MqttConfigMqttEnabledStateEnum `json:"mqttEnabledState"`
}
