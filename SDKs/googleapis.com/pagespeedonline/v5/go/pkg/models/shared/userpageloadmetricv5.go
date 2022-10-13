package shared

type UserPageLoadMetricV5 struct {
	Category      *string  `json:"category"`
	Distributions []Bucket `json:"distributions"`
	FormFactor    *string  `json:"formFactor"`
	Median        *int32   `json:"median"`
	MetricID      *string  `json:"metricId"`
	Percentile    *int32   `json:"percentile"`
}
