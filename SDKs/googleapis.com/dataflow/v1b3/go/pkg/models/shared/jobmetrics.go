package shared

// JobMetrics
// JobMetrics contains a collection of metrics describing the detailed progress of a Dataflow job. Metrics correspond to user-defined and system-defined metrics in the job. This resource captures only the most recent values of each metric; time-series data can be queried for them (under the same metric names) from Cloud Monitoring.
type JobMetrics struct {
	MetricTime *string        `json:"metricTime,omitempty"`
	Metrics    []MetricUpdate `json:"metrics,omitempty"`
}
