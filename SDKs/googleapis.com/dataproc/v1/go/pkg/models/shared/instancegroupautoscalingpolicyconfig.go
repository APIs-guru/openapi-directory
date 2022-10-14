package shared

type InstanceGroupAutoscalingPolicyConfig struct {
	MaxInstances *int32 `json:"maxInstances,omitempty"`
	MinInstances *int32 `json:"minInstances,omitempty"`
	Weight       *int32 `json:"weight,omitempty"`
}
