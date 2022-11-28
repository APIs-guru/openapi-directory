package shared

// GkeNodePoolAutoscalingConfig
// GkeNodePoolAutoscaling contains information the cluster autoscaler needs to adjust the size of the node pool to the current cluster usage.
type GkeNodePoolAutoscalingConfig struct {
	MaxNodeCount *int32 `json:"maxNodeCount,omitempty"`
	MinNodeCount *int32 `json:"minNodeCount,omitempty"`
}
