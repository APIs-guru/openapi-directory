package shared

type BigQueryDestination struct {
	Dataset                    *string        `json:"dataset"`
	Force                      *bool          `json:"force"`
	PartitionSpec              *PartitionSpec `json:"partitionSpec"`
	SeparateTablesPerAssetType *bool          `json:"separateTablesPerAssetType"`
	Table                      *string        `json:"table"`
}
