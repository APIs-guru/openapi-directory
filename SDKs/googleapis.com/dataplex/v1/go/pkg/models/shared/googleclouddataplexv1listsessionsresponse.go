package shared

type GoogleCloudDataplexV1ListSessionsResponse struct {
	NextPageToken *string                        `json:"nextPageToken"`
	Sessions      []GoogleCloudDataplexV1Session `json:"sessions"`
}
