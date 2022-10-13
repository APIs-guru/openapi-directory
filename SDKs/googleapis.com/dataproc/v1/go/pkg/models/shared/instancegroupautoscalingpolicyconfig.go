package shared

type InstanceGroupAutoscalingPolicyConfig struct {
	MaxInstances *int32 `json:"maxInstances"`
	MinInstances *int32 `json:"minInstances"`
	Weight       *int32 `json:"weight"`
}
