package shared

type NestedInterfaceConnectionStatusLabelEnum string

const (
	NestedInterfaceConnectionStatusLabelEnumNotConnected NestedInterfaceConnectionStatusLabelEnum = "Not Connected"
	NestedInterfaceConnectionStatusLabelEnumConnected    NestedInterfaceConnectionStatusLabelEnum = "Connected"
)

type NestedInterfaceConnectionStatus struct {
	Label NestedInterfaceConnectionStatusLabelEnum `json:"label"`
	Value bool                                     `json:"value"`
}

type NestedInterface struct {
	Cable            *int64                           `json:"cable,omitempty"`
	ConnectionStatus *NestedInterfaceConnectionStatus `json:"connection_status,omitempty"`
	Device           *NestedDevice                    `json:"device,omitempty"`
	ID               *int64                           `json:"id,omitempty"`
	Name             string                           `json:"name"`
	URL              *string                          `json:"url,omitempty"`
}
