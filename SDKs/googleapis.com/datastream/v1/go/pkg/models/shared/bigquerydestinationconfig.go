package shared

type BigQueryDestinationConfig struct {
	DataFreshness           *string                  `json:"dataFreshness"`
	SingleTargetDataset     *SingleTargetDataset     `json:"singleTargetDataset"`
	SourceHierarchyDatasets *SourceHierarchyDatasets `json:"sourceHierarchyDatasets"`
}
