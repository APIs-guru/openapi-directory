package shared

// GoogleCloudRecommendationengineV1beta1BigQuerySource
// BigQuery source import data from.
type GoogleCloudRecommendationengineV1beta1BigQuerySource struct {
	DataSchema    *string `json:"dataSchema,omitempty"`
	DatasetID     *string `json:"datasetId,omitempty"`
	GcsStagingDir *string `json:"gcsStagingDir,omitempty"`
	ProjectID     *string `json:"projectId,omitempty"`
	TableID       *string `json:"tableId,omitempty"`
}
