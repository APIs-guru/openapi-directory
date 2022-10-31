package shared

type MetricAbsence struct {
	Aggregations []Aggregation `json:"aggregations,omitempty"`
	Duration     *string       `json:"duration,omitempty"`
	Filter       *string       `json:"filter,omitempty"`
	Trigger      *Trigger      `json:"trigger,omitempty"`
}
