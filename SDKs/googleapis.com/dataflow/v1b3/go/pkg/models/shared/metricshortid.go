package shared

// MetricShortID
// The metric short id is returned to the user alongside an offset into ReportWorkItemStatusRequest
type MetricShortID struct {
	MetricIndex *int32  `json:"metricIndex,omitempty"`
	ShortID     *string `json:"shortId,omitempty"`
}
