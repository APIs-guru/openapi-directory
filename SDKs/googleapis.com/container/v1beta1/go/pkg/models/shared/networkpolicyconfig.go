package shared

// NetworkPolicyConfig
// Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes.
type NetworkPolicyConfig struct {
	Disabled *bool `json:"disabled,omitempty"`
}
