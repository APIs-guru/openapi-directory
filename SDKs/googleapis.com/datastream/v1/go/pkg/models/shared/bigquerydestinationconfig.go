package shared



type BigQueryDestinationConfig struct {
    DataFreshness *string `json:"dataFreshness,omitempty"`
    SingleTargetDataset *SingleTargetDataset `json:"singleTargetDataset,omitempty"`
    SourceHierarchyDatasets *SourceHierarchyDatasets `json:"sourceHierarchyDatasets,omitempty"`
    
}

