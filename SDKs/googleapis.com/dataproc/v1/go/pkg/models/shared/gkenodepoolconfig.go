package shared

type GkeNodePoolConfig struct {
	Autoscaling *GkeNodePoolAutoscalingConfig `json:"autoscaling"`
	Config      *GkeNodeConfig                `json:"config"`
	Locations   []string                      `json:"locations"`
}
