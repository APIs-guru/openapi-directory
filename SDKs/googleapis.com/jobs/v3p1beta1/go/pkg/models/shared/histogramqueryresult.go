package shared

type HistogramQueryResult struct {
	Histogram      map[string]string `json:"histogram"`
	HistogramQuery *string           `json:"histogramQuery"`
}
