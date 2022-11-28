package shared

// TpuConfig
// Configuration for Cloud TPU.
type TpuConfig struct {
	Enabled              *bool   `json:"enabled,omitempty"`
	Ipv4CidrBlock        *string `json:"ipv4CidrBlock,omitempty"`
	UseServiceNetworking *bool   `json:"useServiceNetworking,omitempty"`
}
