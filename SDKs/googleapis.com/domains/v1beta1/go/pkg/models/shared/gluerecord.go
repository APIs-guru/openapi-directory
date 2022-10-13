package shared

type GlueRecord struct {
	HostName      *string  `json:"hostName"`
	Ipv4Addresses []string `json:"ipv4Addresses"`
	Ipv6Addresses []string `json:"ipv6Addresses"`
}
