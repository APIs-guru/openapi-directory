package shared

// GoogleCloudDataplexV1ListEnvironmentsResponse
// List environments response.
type GoogleCloudDataplexV1ListEnvironmentsResponse struct {
	Environments  []GoogleCloudDataplexV1Environment `json:"environments,omitempty"`
	NextPageToken *string                            `json:"nextPageToken,omitempty"`
}
