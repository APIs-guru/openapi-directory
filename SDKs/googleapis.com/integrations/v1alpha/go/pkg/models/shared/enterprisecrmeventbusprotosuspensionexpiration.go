package shared

type EnterpriseCrmEventbusProtoSuspensionExpiration struct {
	ExpireAfterMs   *int32 `json:"expireAfterMs"`
	LiftWhenExpired *bool  `json:"liftWhenExpired"`
	RemindAfterMs   *int32 `json:"remindAfterMs"`
}
