package shared

// SourceHierarchyDatasets
// Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy.
type SourceHierarchyDatasets struct {
	DatasetTemplate *DatasetTemplate `json:"datasetTemplate,omitempty"`
}
