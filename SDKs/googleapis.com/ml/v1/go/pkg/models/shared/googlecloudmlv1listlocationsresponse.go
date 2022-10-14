package shared

type GoogleCloudMlV1ListLocationsResponse struct {
	Locations     []GoogleCloudMlV1Location `json:"locations,omitempty"`
	NextPageToken *string                   `json:"nextPageToken,omitempty"`
}
