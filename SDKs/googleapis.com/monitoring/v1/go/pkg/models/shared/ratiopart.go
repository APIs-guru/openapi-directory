package shared

// RatioPart
// Describes a query to build the numerator or denominator of a TimeSeriesFilterRatio.
type RatioPart struct {
	Aggregation *Aggregation `json:"aggregation,omitempty"`
	Filter      *string      `json:"filter,omitempty"`
}
