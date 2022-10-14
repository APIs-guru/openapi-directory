package shared

type Aggregation struct {
	Alias *string `json:"alias,omitempty"`
	Count *Count  `json:"count,omitempty"`
}
