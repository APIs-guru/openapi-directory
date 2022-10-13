package shared

type TpuConfig struct {
	Enabled              *bool   `json:"enabled"`
	Ipv4CidrBlock        *string `json:"ipv4CidrBlock"`
	UseServiceNetworking *bool   `json:"useServiceNetworking"`
}
