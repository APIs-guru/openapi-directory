package shared

type NestedInterfaceConnectionStatusLabelEnum string

const (
	NestedInterfaceConnectionStatusLabelEnumNotConnected NestedInterfaceConnectionStatusLabelEnum = "Not Connected"
	NestedInterfaceConnectionStatusLabelEnumConnected    NestedInterfaceConnectionStatusLabelEnum = "Connected"
)

type NestedInterfaceConnectionStatusConnectionStatus struct {
	Label NestedInterfaceConnectionStatusLabelEnum `json:"label"`
	Value bool                                     `json:"value"`
}

type NestedInterface struct {
	Cable            *int64                                           `json:"cable"`
	ConnectionStatus *NestedInterfaceConnectionStatusConnectionStatus `json:"connection_status"`
	Device           *NestedDevice                                    `json:"device"`
	ID               *int64                                           `json:"id"`
	Name             string                                           `json:"name"`
	URL              *string                                          `json:"url"`
}
