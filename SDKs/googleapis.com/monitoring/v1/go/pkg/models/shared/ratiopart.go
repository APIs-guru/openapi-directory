package shared

type RatioPart struct {
	Aggregation *Aggregation `json:"aggregation"`
	Filter      *string      `json:"filter"`
}
