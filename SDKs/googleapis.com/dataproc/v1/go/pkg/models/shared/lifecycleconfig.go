package shared

// LifecycleConfig
// Specifies the cluster auto-delete schedule configuration.
type LifecycleConfig struct {
	AutoDeleteTime *string `json:"autoDeleteTime,omitempty"`
	AutoDeleteTTL  *string `json:"autoDeleteTtl,omitempty"`
	IdleDeleteTTL  *string `json:"idleDeleteTtl,omitempty"`
	IdleStartTime  *string `json:"idleStartTime,omitempty"`
}

// LifecycleConfigInput
// Specifies the cluster auto-delete schedule configuration.
type LifecycleConfigInput struct {
	AutoDeleteTime *string `json:"autoDeleteTime,omitempty"`
	AutoDeleteTTL  *string `json:"autoDeleteTtl,omitempty"`
	IdleDeleteTTL  *string `json:"idleDeleteTtl,omitempty"`
}
