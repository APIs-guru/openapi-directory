package shared

type Record struct {
	CollectionPeriod *CollectionPeriod `json:"collectionPeriod"`
	Key              *Key              `json:"key"`
	Metrics          map[string]Metric `json:"metrics"`
}
