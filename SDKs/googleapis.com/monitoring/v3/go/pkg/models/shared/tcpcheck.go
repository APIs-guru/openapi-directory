package shared

type TCPCheck struct {
	PingConfig *PingConfig `json:"pingConfig,omitempty"`
	Port       *int32      `json:"port,omitempty"`
}
