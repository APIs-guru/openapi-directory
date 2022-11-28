package shared

// GoogleCloudMlV1AutoScaling
// Options for automatically scaling a model.
type GoogleCloudMlV1AutoScaling struct {
	MaxNodes *int32                      `json:"maxNodes,omitempty"`
	Metrics  []GoogleCloudMlV1MetricSpec `json:"metrics,omitempty"`
	MinNodes *int32                      `json:"minNodes,omitempty"`
}
