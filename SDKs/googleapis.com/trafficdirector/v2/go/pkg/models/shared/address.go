package shared

// Address
// Addresses specify either a logical or physical address and port, which are used to tell Envoy where to bind/listen, connect to upstream and find management servers.
type Address struct {
	Pipe          *Pipe          `json:"pipe,omitempty"`
	SocketAddress *SocketAddress `json:"socketAddress,omitempty"`
}
