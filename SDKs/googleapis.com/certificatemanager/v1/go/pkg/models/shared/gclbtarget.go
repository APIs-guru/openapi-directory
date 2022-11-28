package shared

// GclbTarget
// Describes a Target Proxy that uses this Certificate Map.
type GclbTarget struct {
	IPConfigs        []IPConfig `json:"ipConfigs,omitempty"`
	TargetHTTPSProxy *string    `json:"targetHttpsProxy,omitempty"`
	TargetSslProxy   *string    `json:"targetSslProxy,omitempty"`
}
