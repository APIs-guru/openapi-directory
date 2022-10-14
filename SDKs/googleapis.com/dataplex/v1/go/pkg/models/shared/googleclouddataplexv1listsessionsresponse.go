package shared

type GoogleCloudDataplexV1ListSessionsResponse struct {
	NextPageToken *string                        `json:"nextPageToken,omitempty"`
	Sessions      []GoogleCloudDataplexV1Session `json:"sessions,omitempty"`
}
