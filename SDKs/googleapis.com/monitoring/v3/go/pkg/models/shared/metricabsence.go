package shared

// MetricAbsence
// A condition type that checks that monitored resources are reporting data. The configuration defines a metric and a set of monitored resources. The predicate is considered in violation when a time series for the specified metric of a monitored resource does not include any data in the specified duration.
type MetricAbsence struct {
	Aggregations []Aggregation `json:"aggregations,omitempty"`
	Duration     *string       `json:"duration,omitempty"`
	Filter       *string       `json:"filter,omitempty"`
	Trigger      *Trigger      `json:"trigger,omitempty"`
}
