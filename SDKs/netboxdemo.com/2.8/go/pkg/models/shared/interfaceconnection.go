package shared

type InterfaceConnectionConnectionStatusLabelEnum string

const (
	InterfaceConnectionConnectionStatusLabelEnumNotConnected InterfaceConnectionConnectionStatusLabelEnum = "Not Connected"
	InterfaceConnectionConnectionStatusLabelEnumConnected    InterfaceConnectionConnectionStatusLabelEnum = "Connected"
)

type InterfaceConnectionConnectionStatusConnectionStatus struct {
	Label InterfaceConnectionConnectionStatusLabelEnum `json:"label"`
	Value bool                                         `json:"value"`
}

type InterfaceConnection struct {
	ConnectionStatus *InterfaceConnectionConnectionStatusConnectionStatus `json:"connection_status,omitempty"`
	InterfaceA       *NestedInterface                                     `json:"interface_a,omitempty"`
	InterfaceB       NestedInterface                                      `json:"interface_b"`
}
