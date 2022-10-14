package shared

type EnterpriseCrmEventbusProtoSuspensionConfig struct {
	CustomMessage        *string                                               `json:"customMessage,omitempty"`
	Notifications        []EnterpriseCrmEventbusProtoNotification              `json:"notifications,omitempty"`
	SuspensionExpiration *EnterpriseCrmEventbusProtoSuspensionExpiration       `json:"suspensionExpiration,omitempty"`
	WhoMayResolve        []EnterpriseCrmEventbusProtoSuspensionAuthPermissions `json:"whoMayResolve,omitempty"`
}
