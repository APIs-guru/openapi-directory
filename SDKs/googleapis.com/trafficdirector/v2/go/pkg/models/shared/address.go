package shared

type Address struct {
	Pipe          *Pipe          `json:"pipe"`
	SocketAddress *SocketAddress `json:"socketAddress"`
}
