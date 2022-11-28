package shared

// TCPCheck
// Information required for a TCP Uptime check request.
type TCPCheck struct {
	PingConfig *PingConfig `json:"pingConfig,omitempty"`
	Port       *int32      `json:"port,omitempty"`
}
