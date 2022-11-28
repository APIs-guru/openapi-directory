package shared

// Record
// Record is a single Chrome UX report data record. It contains use experience statistics for a single url pattern and set of dimensions.
type Record struct {
	CollectionPeriod *CollectionPeriod `json:"collectionPeriod,omitempty"`
	Key              *Key              `json:"key,omitempty"`
	Metrics          map[string]Metric `json:"metrics,omitempty"`
}
