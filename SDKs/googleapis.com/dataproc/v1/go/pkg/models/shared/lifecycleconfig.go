package shared



type LifecycleConfig struct {
    AutoDeleteTime *string `json:"autoDeleteTime,omitempty"`
    AutoDeleteTTL *string `json:"autoDeleteTtl,omitempty"`
    IdleDeleteTTL *string `json:"idleDeleteTtl,omitempty"`
    IdleStartTime *string `json:"idleStartTime,omitempty"`
    
}

