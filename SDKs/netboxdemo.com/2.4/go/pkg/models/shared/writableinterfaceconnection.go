package shared

type WritableInterfaceConnectionInput struct {
	ConnectionStatus *bool `json:"connection_status,omitempty"`
	InterfaceA       int64 `json:"interface_a"`
	InterfaceB       int64 `json:"interface_b"`
}
