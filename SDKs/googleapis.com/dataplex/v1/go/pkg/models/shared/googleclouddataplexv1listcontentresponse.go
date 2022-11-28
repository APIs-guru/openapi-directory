package shared

// GoogleCloudDataplexV1ListContentResponse
// List content response.
type GoogleCloudDataplexV1ListContentResponse struct {
	Content       []GoogleCloudDataplexV1Content `json:"content,omitempty"`
	NextPageToken *string                        `json:"nextPageToken,omitempty"`
}
