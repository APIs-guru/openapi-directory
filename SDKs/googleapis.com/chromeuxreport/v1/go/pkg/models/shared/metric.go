package shared

// Metric
// A `metric` is a set of user experience data for a single web performance metric, like "first contentful paint". It contains a summary histogram of real world Chrome usage as a series of `bins`.
type Metric struct {
	Histogram   []Bin        `json:"histogram,omitempty"`
	Percentiles *Percentiles `json:"percentiles,omitempty"`
}
