package shared

// BatchGetLocationsRequest
// Request message for Locations.BatchGetLocations.
type BatchGetLocationsRequest struct {
	LocationNames []string `json:"locationNames,omitempty"`
}
