package shared



type EnterpriseCrmEventbusProtoSuspensionExpiration struct {
    ExpireAfterMs *int32 `json:"expireAfterMs,omitempty"`
    LiftWhenExpired *bool `json:"liftWhenExpired,omitempty"`
    RemindAfterMs *int32 `json:"remindAfterMs,omitempty"`
    
}

