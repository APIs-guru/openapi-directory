package shared

type InterfaceConnectionConnectionStatusConnectionStatus struct {
	Label string `json:"label"`
	Value bool   `json:"value"`
}

type InterfaceConnection struct {
	ConnectionStatus *InterfaceConnectionConnectionStatusConnectionStatus `json:"connection_status,omitempty"`
	ID               *int64                                               `json:"id,omitempty"`
	InterfaceA       NestedInterface                                      `json:"interface_a"`
	InterfaceB       NestedInterface                                      `json:"interface_b"`
}
