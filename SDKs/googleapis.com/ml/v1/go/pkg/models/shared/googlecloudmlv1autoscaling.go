package shared

type GoogleCloudMlV1AutoScaling struct {
	MaxNodes *int32                      `json:"maxNodes"`
	Metrics  []GoogleCloudMlV1MetricSpec `json:"metrics"`
	MinNodes *int32                      `json:"minNodes"`
}
