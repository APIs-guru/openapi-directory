package shared

type NetworkInterface struct {
	AccessConfigs []AccessConfig `json:"accessConfigs"`
	Network       *string        `json:"network"`
	NetworkIP     *string        `json:"networkIp"`
}
