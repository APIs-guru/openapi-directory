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
	Cable            *int64                                           `json:"cable"`
	ConnectionStatus *NestedPowerPortConnectionStatusConnectionStatus `json:"connection_status"`
	Device           *NestedDevice                                    `json:"device"`
	ID               *int64                                           `json:"id"`
	Name             string                                           `json:"name"`
	URL              *string                                          `json:"url"`
}
