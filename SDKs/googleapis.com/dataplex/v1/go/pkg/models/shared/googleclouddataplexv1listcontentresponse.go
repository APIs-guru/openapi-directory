package shared

type GoogleCloudDataplexV1ListContentResponse struct {
	Content       []GoogleCloudDataplexV1Content `json:"content"`
	NextPageToken *string                        `json:"nextPageToken"`
}
