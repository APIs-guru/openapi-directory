package shared

// ClusterAutoscalingConfig
// Autoscaling config for a cluster.
type ClusterAutoscalingConfig struct {
	AutoscalingLimits  *AutoscalingLimits  `json:"autoscalingLimits,omitempty"`
	AutoscalingTargets *AutoscalingTargets `json:"autoscalingTargets,omitempty"`
}
