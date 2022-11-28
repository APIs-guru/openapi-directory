package shared

// HistogramQueryResult
// Output only. Histogram result that matches HistogramSpec specified in searches.
type HistogramQueryResult struct {
	Histogram      map[string]string `json:"histogram,omitempty"`
	HistogramQuery *string           `json:"histogramQuery,omitempty"`
}
