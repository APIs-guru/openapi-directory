package shared

// GoogleCloudRetailV2betaBigQuerySource
// BigQuery source import data from.
type GoogleCloudRetailV2betaBigQuerySource struct {
	DataSchema    *string         `json:"dataSchema,omitempty"`
	DatasetID     *string         `json:"datasetId,omitempty"`
	GcsStagingDir *string         `json:"gcsStagingDir,omitempty"`
	PartitionDate *GoogleTypeDate `json:"partitionDate,omitempty"`
	ProjectID     *string         `json:"projectId,omitempty"`
	TableID       *string         `json:"tableId,omitempty"`
}
