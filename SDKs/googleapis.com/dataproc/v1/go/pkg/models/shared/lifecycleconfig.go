package shared

type LifecycleConfig struct {
	AutoDeleteTime *string `json:"autoDeleteTime"`
	AutoDeleteTTL  *string `json:"autoDeleteTtl"`
	IdleDeleteTTL  *string `json:"idleDeleteTtl"`
	IdleStartTime  *string `json:"idleStartTime"`
}
