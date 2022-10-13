package shared

type DeviceRegistryLogLevelEnum string

const (
	DeviceRegistryLogLevelEnumLogLevelUnspecified DeviceRegistryLogLevelEnum = "LOG_LEVEL_UNSPECIFIED"
	DeviceRegistryLogLevelEnumNone                DeviceRegistryLogLevelEnum = "NONE"
	DeviceRegistryLogLevelEnumError               DeviceRegistryLogLevelEnum = "ERROR"
	DeviceRegistryLogLevelEnumInfo                DeviceRegistryLogLevelEnum = "INFO"
	DeviceRegistryLogLevelEnumDebug               DeviceRegistryLogLevelEnum = "DEBUG"
)

type DeviceRegistry struct {
	Credentials              []RegistryCredential        `json:"credentials"`
	EventNotificationConfigs []EventNotificationConfig   `json:"eventNotificationConfigs"`
	HTTPConfig               *HTTPConfig                 `json:"httpConfig"`
	ID                       *string                     `json:"id"`
	LogLevel                 *DeviceRegistryLogLevelEnum `json:"logLevel"`
	MqttConfig               *MqttConfig                 `json:"mqttConfig"`
	Name                     *string                     `json:"name"`
	StateNotificationConfig  *StateNotificationConfig    `json:"stateNotificationConfig"`
}
