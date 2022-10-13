package shared

type GoogleCloudMlV1ListLocationsResponse struct {
	Locations     []GoogleCloudMlV1Location `json:"locations"`
	NextPageToken *string                   `json:"nextPageToken"`
}
