package shared

// QuerySeriesRequest
// QuerySeries holds all parameters of the Prometheus upstream API for querying series.
type QuerySeriesRequest struct {
	End   *string `json:"end,omitempty"`
	Start *string `json:"start,omitempty"`
}
