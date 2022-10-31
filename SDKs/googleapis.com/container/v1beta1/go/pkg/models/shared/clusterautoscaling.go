package shared

type ClusterAutoscalingAutoscalingProfileEnum string

const (
	ClusterAutoscalingAutoscalingProfileEnumProfileUnspecified  ClusterAutoscalingAutoscalingProfileEnum = "PROFILE_UNSPECIFIED"
	ClusterAutoscalingAutoscalingProfileEnumOptimizeUtilization ClusterAutoscalingAutoscalingProfileEnum = "OPTIMIZE_UTILIZATION"
	ClusterAutoscalingAutoscalingProfileEnumBalanced            ClusterAutoscalingAutoscalingProfileEnum = "BALANCED"
)

type ClusterAutoscaling struct {
	AutoprovisioningLocations        []string                                  `json:"autoprovisioningLocations,omitempty"`
	AutoprovisioningNodePoolDefaults *AutoprovisioningNodePoolDefaults         `json:"autoprovisioningNodePoolDefaults,omitempty"`
	AutoscalingProfile               *ClusterAutoscalingAutoscalingProfileEnum `json:"autoscalingProfile,omitempty"`
	EnableNodeAutoprovisioning       *bool                                     `json:"enableNodeAutoprovisioning,omitempty"`
	ResourceLimits                   []ResourceLimit                           `json:"resourceLimits,omitempty"`
}
