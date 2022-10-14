package shared

type GkeNodePoolAutoscalingConfig struct {
	MaxNodeCount *int32 `json:"maxNodeCount,omitempty"`
	MinNodeCount *int32 `json:"minNodeCount,omitempty"`
}
