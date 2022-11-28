package shared

// IPConfig
// Defines IP configuration where this Certificate Map is serving.
type IPConfig struct {
	IPAddress *string `json:"ipAddress,omitempty"`
	Ports     []int64 `json:"ports,omitempty"`
}
