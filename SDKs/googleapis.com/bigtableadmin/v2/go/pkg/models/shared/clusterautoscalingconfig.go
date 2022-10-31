package shared



type ClusterAutoscalingConfig struct {
    AutoscalingLimits *AutoscalingLimits `json:"autoscalingLimits,omitempty"`
    AutoscalingTargets *AutoscalingTargets `json:"autoscalingTargets,omitempty"`
    
}

