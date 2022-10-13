package shared

type Aggregation struct {
	Alias *string `json:"alias"`
	Count *Count  `json:"count"`
}
