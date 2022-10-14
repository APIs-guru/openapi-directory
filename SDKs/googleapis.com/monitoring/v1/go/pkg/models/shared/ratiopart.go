package shared

type RatioPart struct {
	Aggregation *Aggregation `json:"aggregation,omitempty"`
	Filter      *string      `json:"filter,omitempty"`
}
