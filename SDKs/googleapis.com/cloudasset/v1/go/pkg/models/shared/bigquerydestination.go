package shared

type BigQueryDestination struct {
	Dataset                    *string        `json:"dataset,omitempty"`
	Force                      *bool          `json:"force,omitempty"`
	PartitionSpec              *PartitionSpec `json:"partitionSpec,omitempty"`
	SeparateTablesPerAssetType *bool          `json:"separateTablesPerAssetType,omitempty"`
	Table                      *string        `json:"table,omitempty"`
}
