package shared

type GkeNodePoolConfig struct {
	Autoscaling *GkeNodePoolAutoscalingConfig `json:"autoscaling,omitempty"`
	Config      *GkeNodeConfig                `json:"config,omitempty"`
	Locations   []string                      `json:"locations,omitempty"`
}
