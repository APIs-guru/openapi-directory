package shared

// InstanceGroupAutoscalingPolicyConfig
// Configuration for the size bounds of an instance group, including its proportional size to other groups.
type InstanceGroupAutoscalingPolicyConfig struct {
	MaxInstances *int32 `json:"maxInstances,omitempty"`
	MinInstances *int32 `json:"minInstances,omitempty"`
	Weight       *int32 `json:"weight,omitempty"`
}
