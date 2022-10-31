package shared




type DeviceRegistryLogLevelEnum string

const (
    DeviceRegistryLogLevelEnumLogLevelUnspecified DeviceRegistryLogLevelEnum = "LOG_LEVEL_UNSPECIFIED"
DeviceRegistryLogLevelEnumNone DeviceRegistryLogLevelEnum = "NONE"
DeviceRegistryLogLevelEnumError DeviceRegistryLogLevelEnum = "ERROR"
DeviceRegistryLogLevelEnumInfo DeviceRegistryLogLevelEnum = "INFO"
DeviceRegistryLogLevelEnumDebug DeviceRegistryLogLevelEnum = "DEBUG"
)


type DeviceRegistry struct {
    Credentials []RegistryCredential `json:"credentials,omitempty"`
    EventNotificationConfigs []EventNotificationConfig `json:"eventNotificationConfigs,omitempty"`
    HTTPConfig *HTTPConfig `json:"httpConfig,omitempty"`
    ID *string `json:"id,omitempty"`
    LogLevel *DeviceRegistryLogLevelEnum `json:"logLevel,omitempty"`
    MqttConfig *MqttConfig `json:"mqttConfig,omitempty"`
    Name *string `json:"name,omitempty"`
    StateNotificationConfig *StateNotificationConfig `json:"stateNotificationConfig,omitempty"`
    
}

