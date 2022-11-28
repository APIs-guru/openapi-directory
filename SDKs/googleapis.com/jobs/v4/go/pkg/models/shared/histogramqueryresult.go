package shared

// HistogramQueryResult
// Histogram result that matches HistogramQuery specified in searches.
type HistogramQueryResult struct {
	Histogram      map[string]string `json:"histogram,omitempty"`
	HistogramQuery *string           `json:"histogramQuery,omitempty"`
}
