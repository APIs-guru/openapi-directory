package shared

// PivotGroupRule
// An optional setting on a PivotGroup that defines buckets for the values in the source data column rather than breaking out each individual value. Only one PivotGroup with a group rule may be added for each column in the source data, though on any given column you may add both a PivotGroup that has a rule and a PivotGroup that does not.
type PivotGroupRule struct {
	DateTimeRule  *DateTimeRule  `json:"dateTimeRule,omitempty"`
	HistogramRule *HistogramRule `json:"histogramRule,omitempty"`
	ManualRule    *ManualRule    `json:"manualRule,omitempty"`
}
