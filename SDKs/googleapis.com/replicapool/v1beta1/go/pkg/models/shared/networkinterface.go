package shared

// NetworkInterface
// A Compute Engine NetworkInterface resource. Identical to the NetworkInterface on the corresponding Compute Engine resource.
type NetworkInterface struct {
	AccessConfigs []AccessConfig `json:"accessConfigs,omitempty"`
	Network       *string        `json:"network,omitempty"`
	NetworkIP     *string        `json:"networkIp,omitempty"`
}
