package shared

type GoogleCloudDatapipelinesV1ListPipelinesResponse struct {
	NextPageToken *string                              `json:"nextPageToken"`
	Pipelines     []GoogleCloudDatapipelinesV1Pipeline `json:"pipelines"`
}
