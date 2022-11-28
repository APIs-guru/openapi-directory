package shared

// TCPSocketAction
// Not supported by Cloud Run TCPSocketAction describes an action based on opening a socket
type TCPSocketAction struct {
	Host *string `json:"host,omitempty"`
	Port *int32  `json:"port,omitempty"`
}
