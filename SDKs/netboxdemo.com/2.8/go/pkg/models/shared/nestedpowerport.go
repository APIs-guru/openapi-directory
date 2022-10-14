package shared

type NestedPowerPortConnectionStatusLabelEnum string

const (
	NestedPowerPortConnectionStatusLabelEnumNotConnected NestedPowerPortConnectionStatusLabelEnum = "Not Connected"
	NestedPowerPortConnectionStatusLabelEnumConnected    NestedPowerPortConnectionStatusLabelEnum = "Connected"
)

type NestedPowerPortConnectionStatusConnectionStatus struct {
	Label NestedPowerPortConnectionStatusLabelEnum `json:"label"`
	Value bool                                     `json:"value"`
}

type NestedPowerPort struct {
	Cable            *int64                                           `json:"cable,omitempty"`
	ConnectionStatus *NestedPowerPortConnectionStatusConnectionStatus `json:"connection_status,omitempty"`
	Device           *NestedDevice                                    `json:"device,omitempty"`
	ID               *int64                                           `json:"id,omitempty"`
	Name             string                                           `json:"name"`
	URL              *string                                          `json:"url,omitempty"`
}
