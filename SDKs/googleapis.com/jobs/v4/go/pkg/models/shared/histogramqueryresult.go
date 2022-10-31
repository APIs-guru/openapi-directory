package shared

type HistogramQueryResult struct {
	Histogram      map[string]string `json:"histogram,omitempty"`
	HistogramQuery *string           `json:"histogramQuery,omitempty"`
}
