package shared

// ForwardSSHTunnelConnectivity
// Forward SSH Tunnel connectivity.
type ForwardSSHTunnelConnectivity struct {
	Hostname   *string `json:"hostname,omitempty"`
	Password   *string `json:"password,omitempty"`
	Port       *int32  `json:"port,omitempty"`
	PrivateKey *string `json:"privateKey,omitempty"`
	Username   *string `json:"username,omitempty"`
}
