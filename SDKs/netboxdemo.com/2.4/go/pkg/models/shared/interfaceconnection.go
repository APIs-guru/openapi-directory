package shared

type InterfaceConnectionConnectionStatus struct {
	Label string `json:"label"`
	Value bool   `json:"value"`
}

type InterfaceConnection struct {
	ConnectionStatus *InterfaceConnectionConnectionStatus `json:"connection_status,omitempty"`
	ID               *int64                               `json:"id,omitempty"`
	InterfaceA       NestedInterface                      `json:"interface_a"`
	InterfaceB       NestedInterface                      `json:"interface_b"`
}
