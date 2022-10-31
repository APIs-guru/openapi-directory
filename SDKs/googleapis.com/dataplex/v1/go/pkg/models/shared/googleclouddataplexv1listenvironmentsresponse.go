package shared

type GoogleCloudDataplexV1ListEnvironmentsResponse struct {
	Environments  []GoogleCloudDataplexV1Environment `json:"environments,omitempty"`
	NextPageToken *string                            `json:"nextPageToken,omitempty"`
}
