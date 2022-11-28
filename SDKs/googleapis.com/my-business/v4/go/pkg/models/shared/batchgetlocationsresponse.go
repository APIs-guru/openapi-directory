package shared

// BatchGetLocationsResponse
// Response message for Locations.BatchGetLocations.
type BatchGetLocationsResponse struct {
	Locations []Location `json:"locations,omitempty"`
}
