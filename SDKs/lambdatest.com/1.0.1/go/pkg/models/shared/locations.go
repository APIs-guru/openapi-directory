package shared

type LocationsLocations struct {
	Code *string `json:"code"`
	Name *string `json:"name"`
}

type Locations struct {
	Locations []LocationsLocations `json:"locations"`
}
