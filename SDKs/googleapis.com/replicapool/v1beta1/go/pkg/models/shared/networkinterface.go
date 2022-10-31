package shared

type NetworkInterface struct {
	AccessConfigs []AccessConfig `json:"accessConfigs,omitempty"`
	Network       *string        `json:"network,omitempty"`
	NetworkIP     *string        `json:"networkIp,omitempty"`
}
