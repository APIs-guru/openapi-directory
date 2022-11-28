package shared

// GoogleCloudAssetV1p7beta1BigQueryDestination
// A BigQuery destination for exporting assets to.
type GoogleCloudAssetV1p7beta1BigQueryDestination struct {
	Dataset                    *string                                 `json:"dataset,omitempty"`
	Force                      *bool                                   `json:"force,omitempty"`
	PartitionSpec              *GoogleCloudAssetV1p7beta1PartitionSpec `json:"partitionSpec,omitempty"`
	SeparateTablesPerAssetType *bool                                   `json:"separateTablesPerAssetType,omitempty"`
	Table                      *string                                 `json:"table,omitempty"`
}
