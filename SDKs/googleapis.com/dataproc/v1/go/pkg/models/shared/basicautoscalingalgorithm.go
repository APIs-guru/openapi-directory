package shared

// BasicAutoscalingAlgorithm
// Basic algorithm for autoscaling.
type BasicAutoscalingAlgorithm struct {
	CooldownPeriod        *string                           `json:"cooldownPeriod,omitempty"`
	SparkStandaloneConfig *SparkStandaloneAutoscalingConfig `json:"sparkStandaloneConfig,omitempty"`
	YarnConfig            *BasicYarnAutoscalingConfig       `json:"yarnConfig,omitempty"`
}
