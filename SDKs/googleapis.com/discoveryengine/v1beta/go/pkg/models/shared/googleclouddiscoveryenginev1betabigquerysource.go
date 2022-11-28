package shared

// GoogleCloudDiscoveryengineV1betaBigQuerySource
// BigQuery source import data from.
type GoogleCloudDiscoveryengineV1betaBigQuerySource struct {
	DataSchema    *string         `json:"dataSchema,omitempty"`
	DatasetID     *string         `json:"datasetId,omitempty"`
	GcsStagingDir *string         `json:"gcsStagingDir,omitempty"`
	PartitionDate *GoogleTypeDate `json:"partitionDate,omitempty"`
	ProjectID     *string         `json:"projectId,omitempty"`
	TableID       *string         `json:"tableId,omitempty"`
}
