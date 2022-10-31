package shared

type Address struct {
	Pipe          *Pipe          `json:"pipe,omitempty"`
	SocketAddress *SocketAddress `json:"socketAddress,omitempty"`
}
