package shared

// GoogleCloudDataplexV1ListActionsResponse
// List actions response.
type GoogleCloudDataplexV1ListActionsResponse struct {
	Actions       []GoogleCloudDataplexV1Action `json:"actions,omitempty"`
	NextPageToken *string                       `json:"nextPageToken,omitempty"`
}
