package shared

// GoogleCloudDataplexV1ListSessionsResponse
// List sessions response.
type GoogleCloudDataplexV1ListSessionsResponse struct {
	NextPageToken *string                        `json:"nextPageToken,omitempty"`
	Sessions      []GoogleCloudDataplexV1Session `json:"sessions,omitempty"`
}
