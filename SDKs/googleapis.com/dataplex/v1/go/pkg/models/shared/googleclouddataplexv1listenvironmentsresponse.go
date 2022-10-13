package shared

type GoogleCloudDataplexV1ListEnvironmentsResponse struct {
	Environments  []GoogleCloudDataplexV1Environment `json:"environments"`
	NextPageToken *string                            `json:"nextPageToken"`
}
