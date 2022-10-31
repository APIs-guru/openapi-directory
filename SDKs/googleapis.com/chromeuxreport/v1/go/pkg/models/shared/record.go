package shared



type Record struct {
    CollectionPeriod *CollectionPeriod `json:"collectionPeriod,omitempty"`
    Key *Key `json:"key,omitempty"`
    Metrics map[string]Metric `json:"metrics,omitempty"`
    
}

