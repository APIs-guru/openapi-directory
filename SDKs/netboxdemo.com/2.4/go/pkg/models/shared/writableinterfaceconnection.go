package shared

type WritableInterfaceConnection struct {
	ConnectionStatus *bool  `json:"connection_status,omitempty"`
	ID               *int64 `json:"id,omitempty"`
	InterfaceA       int64  `json:"interface_a"`
	InterfaceB       int64  `json:"interface_b"`
}
