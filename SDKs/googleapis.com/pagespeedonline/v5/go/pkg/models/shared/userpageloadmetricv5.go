package shared

// UserPageLoadMetricV5
// A CrUX metric object for a single metric and form factor.
type UserPageLoadMetricV5 struct {
	Category      *string  `json:"category,omitempty"`
	Distributions []Bucket `json:"distributions,omitempty"`
	FormFactor    *string  `json:"formFactor,omitempty"`
	Median        *int32   `json:"median,omitempty"`
	MetricID      *string  `json:"metricId,omitempty"`
	Percentile    *int32   `json:"percentile,omitempty"`
}
