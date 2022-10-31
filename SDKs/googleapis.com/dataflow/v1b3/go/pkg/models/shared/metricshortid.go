package shared

type MetricShortID struct {
	MetricIndex *int32  `json:"metricIndex,omitempty"`
	ShortID     *string `json:"shortId,omitempty"`
}
