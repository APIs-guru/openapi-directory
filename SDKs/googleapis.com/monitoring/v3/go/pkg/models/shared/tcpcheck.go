package shared

type TCPCheck struct {
	PingConfig *PingConfig `json:"pingConfig"`
	Port       *int32      `json:"port"`
}
