package shared

type GoogleCloudMlV1AutoScaling struct {
	MaxNodes *int32                      `json:"maxNodes,omitempty"`
	Metrics  []GoogleCloudMlV1MetricSpec `json:"metrics,omitempty"`
	MinNodes *int32                      `json:"minNodes,omitempty"`
}
