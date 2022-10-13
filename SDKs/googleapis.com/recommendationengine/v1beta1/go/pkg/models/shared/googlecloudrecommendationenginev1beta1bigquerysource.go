package shared

type GoogleCloudRecommendationengineV1beta1BigQuerySource struct {
	DataSchema    *string `json:"dataSchema"`
	DatasetID     *string `json:"datasetId"`
	GcsStagingDir *string `json:"gcsStagingDir"`
	ProjectID     *string `json:"projectId"`
	TableID       *string `json:"tableId"`
}
