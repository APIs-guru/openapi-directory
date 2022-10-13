package shared

type MetricAbsence struct {
	Aggregations []Aggregation `json:"aggregations"`
	Duration     *string       `json:"duration"`
	Filter       *string       `json:"filter"`
	Trigger      *Trigger      `json:"trigger"`
}
