package shared

type ClientConfig struct {
	Node      *Node          `json:"node"`
	XdsConfig []PerXdsConfig `json:"xdsConfig"`
}
