package shared

type GoogleCloudAssetV1p7beta1BigQueryDestination struct {
	Dataset                    *string                                 `json:"dataset"`
	Force                      *bool                                   `json:"force"`
	PartitionSpec              *GoogleCloudAssetV1p7beta1PartitionSpec `json:"partitionSpec"`
	SeparateTablesPerAssetType *bool                                   `json:"separateTablesPerAssetType"`
	Table                      *string                                 `json:"table"`
}
