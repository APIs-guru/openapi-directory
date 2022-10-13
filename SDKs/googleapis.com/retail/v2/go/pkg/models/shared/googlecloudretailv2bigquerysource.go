package shared

type GoogleCloudRetailV2BigQuerySource struct {
	DataSchema    *string         `json:"dataSchema"`
	DatasetID     *string         `json:"datasetId"`
	GcsStagingDir *string         `json:"gcsStagingDir"`
	PartitionDate *GoogleTypeDate `json:"partitionDate"`
	ProjectID     *string         `json:"projectId"`
	TableID       *string         `json:"tableId"`
}
