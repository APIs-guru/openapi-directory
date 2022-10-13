package shared

type DeviceLogLevelEnum string

const (
	DeviceLogLevelEnumLogLevelUnspecified DeviceLogLevelEnum = "LOG_LEVEL_UNSPECIFIED"
	DeviceLogLevelEnumNone                DeviceLogLevelEnum = "NONE"
	DeviceLogLevelEnumError               DeviceLogLevelEnum = "ERROR"
	DeviceLogLevelEnumInfo                DeviceLogLevelEnum = "INFO"
	DeviceLogLevelEnumDebug               DeviceLogLevelEnum = "DEBUG"
)

type Device struct {
	Blocked            *bool               `json:"blocked"`
	Config             *DeviceConfig       `json:"config"`
	Credentials        []DeviceCredential  `json:"credentials"`
	GatewayConfig      *GatewayConfig      `json:"gatewayConfig"`
	ID                 *string             `json:"id"`
	LastConfigAckTime  *string             `json:"lastConfigAckTime"`
	LastConfigSendTime *string             `json:"lastConfigSendTime"`
	LastErrorStatus    *Status             `json:"lastErrorStatus"`
	LastErrorTime      *string             `json:"lastErrorTime"`
	LastEventTime      *string             `json:"lastEventTime"`
	LastHeartbeatTime  *string             `json:"lastHeartbeatTime"`
	LastStateTime      *string             `json:"lastStateTime"`
	LogLevel           *DeviceLogLevelEnum `json:"logLevel"`
	Metadata           map[string]string   `json:"metadata"`
	Name               *string             `json:"name"`
	NumID              *string             `json:"numId"`
	State              *DeviceState        `json:"state"`
}
