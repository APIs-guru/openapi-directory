package shared

// TimeSeriesRatio
// A TimeSeriesRatio specifies two TimeSeries to use for computing the good_service / total_service ratio. The specified TimeSeries must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. The TimeSeriesRatio must specify exactly two of good, bad, and total, and the relationship good_service + bad_service = total_service will be assumed.
type TimeSeriesRatio struct {
	BadServiceFilter   *string `json:"badServiceFilter,omitempty"`
	GoodServiceFilter  *string `json:"goodServiceFilter,omitempty"`
	TotalServiceFilter *string `json:"totalServiceFilter,omitempty"`
}
