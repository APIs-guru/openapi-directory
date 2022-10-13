package shared

type NetworkInterface struct {
	ExternalIP *string `json:"externalIp"`
	InternalIP *string `json:"internalIp"`
	Network    *string `json:"network"`
	Subnetwork *string `json:"subnetwork"`
}
