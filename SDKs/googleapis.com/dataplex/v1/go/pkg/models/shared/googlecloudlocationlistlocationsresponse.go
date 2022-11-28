package shared

// GoogleCloudLocationListLocationsResponse
// The response message for Locations.ListLocations.
type GoogleCloudLocationListLocationsResponse struct {
	Locations     []GoogleCloudLocationLocation `json:"locations,omitempty"`
	NextPageToken *string                       `json:"nextPageToken,omitempty"`
}
