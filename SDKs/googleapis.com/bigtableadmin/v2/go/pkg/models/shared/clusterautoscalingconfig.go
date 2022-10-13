package shared

type ClusterAutoscalingConfig struct {
	AutoscalingLimits  *AutoscalingLimits  `json:"autoscalingLimits"`
	AutoscalingTargets *AutoscalingTargets `json:"autoscalingTargets"`
}
