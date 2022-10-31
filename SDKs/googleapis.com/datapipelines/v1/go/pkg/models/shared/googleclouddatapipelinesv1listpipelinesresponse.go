package shared

type GoogleCloudDatapipelinesV1ListPipelinesResponse struct {
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
	Pipelines     []GoogleCloudDatapipelinesV1Pipeline `json:"pipelines,omitempty"`
}
