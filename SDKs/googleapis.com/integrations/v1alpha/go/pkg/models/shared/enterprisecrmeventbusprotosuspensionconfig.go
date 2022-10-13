package shared

type EnterpriseCrmEventbusProtoSuspensionConfig struct {
	CustomMessage        *string                                               `json:"customMessage"`
	Notifications        []EnterpriseCrmEventbusProtoNotification              `json:"notifications"`
	SuspensionExpiration *EnterpriseCrmEventbusProtoSuspensionExpiration       `json:"suspensionExpiration"`
	WhoMayResolve        []EnterpriseCrmEventbusProtoSuspensionAuthPermissions `json:"whoMayResolve"`
}
