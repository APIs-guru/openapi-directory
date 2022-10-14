package shared

type ClientConfig struct {
	Node      *Node          `json:"node,omitempty"`
	XdsConfig []PerXdsConfig `json:"xdsConfig,omitempty"`
}
