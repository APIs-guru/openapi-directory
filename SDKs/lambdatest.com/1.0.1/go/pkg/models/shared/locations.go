package shared

type LocationsLocations struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

type Locations struct {
	Locations []LocationsLocations `json:"locations,omitempty"`
}
