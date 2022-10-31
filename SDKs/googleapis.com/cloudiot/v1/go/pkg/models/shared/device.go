package shared




type DeviceLogLevelEnum string

const (
    DeviceLogLevelEnumLogLevelUnspecified DeviceLogLevelEnum = "LOG_LEVEL_UNSPECIFIED"
DeviceLogLevelEnumNone DeviceLogLevelEnum = "NONE"
DeviceLogLevelEnumError DeviceLogLevelEnum = "ERROR"
DeviceLogLevelEnumInfo DeviceLogLevelEnum = "INFO"
DeviceLogLevelEnumDebug DeviceLogLevelEnum = "DEBUG"
)


type Device struct {
    Blocked *bool `json:"blocked,omitempty"`
    Config *DeviceConfig `json:"config,omitempty"`
    Credentials []DeviceCredential `json:"credentials,omitempty"`
    GatewayConfig *GatewayConfig `json:"gatewayConfig,omitempty"`
    ID *string `json:"id,omitempty"`
    LastConfigAckTime *string `json:"lastConfigAckTime,omitempty"`
    LastConfigSendTime *string `json:"lastConfigSendTime,omitempty"`
    LastErrorStatus *Status `json:"lastErrorStatus,omitempty"`
    LastErrorTime *string `json:"lastErrorTime,omitempty"`
    LastEventTime *string `json:"lastEventTime,omitempty"`
    LastHeartbeatTime *string `json:"lastHeartbeatTime,omitempty"`
    LastStateTime *string `json:"lastStateTime,omitempty"`
    LogLevel *DeviceLogLevelEnum `json:"logLevel,omitempty"`
    Metadata map[string]string `json:"metadata,omitempty"`
    Name *string `json:"name,omitempty"`
    NumID *string `json:"numId,omitempty"`
    State *DeviceState `json:"state,omitempty"`
    
}

