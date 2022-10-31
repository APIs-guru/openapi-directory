package shared



type GclbTarget struct {
    IPConfigs []IPConfig `json:"ipConfigs,omitempty"`
    TargetHTTPSProxy *string `json:"targetHttpsProxy,omitempty"`
    TargetSslProxy *string `json:"targetSslProxy,omitempty"`
    
}

