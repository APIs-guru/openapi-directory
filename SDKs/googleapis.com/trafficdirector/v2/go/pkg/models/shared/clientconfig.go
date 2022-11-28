package shared

// ClientConfig
// All xds configs for a particular client.
type ClientConfig struct {
	Node      *Node          `json:"node,omitempty"`
	XdsConfig []PerXdsConfig `json:"xdsConfig,omitempty"`
}
