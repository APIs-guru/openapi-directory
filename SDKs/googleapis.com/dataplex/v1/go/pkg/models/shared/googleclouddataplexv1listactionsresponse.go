package shared

type GoogleCloudDataplexV1ListActionsResponse struct {
	Actions       []GoogleCloudDataplexV1Action `json:"actions"`
	NextPageToken *string                       `json:"nextPageToken"`
}
