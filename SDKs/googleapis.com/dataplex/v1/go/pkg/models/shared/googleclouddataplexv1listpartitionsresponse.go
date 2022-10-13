package shared

type GoogleCloudDataplexV1ListPartitionsResponse struct {
	NextPageToken *string                          `json:"nextPageToken"`
	Partitions    []GoogleCloudDataplexV1Partition `json:"partitions"`
}
