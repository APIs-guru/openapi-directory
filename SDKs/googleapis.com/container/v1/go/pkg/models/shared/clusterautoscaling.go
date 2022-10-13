package shared

type ClusterAutoscalingAutoscalingProfileEnum string

const (
	ClusterAutoscalingAutoscalingProfileEnumProfileUnspecified  ClusterAutoscalingAutoscalingProfileEnum = "PROFILE_UNSPECIFIED"
	ClusterAutoscalingAutoscalingProfileEnumOptimizeUtilization ClusterAutoscalingAutoscalingProfileEnum = "OPTIMIZE_UTILIZATION"
	ClusterAutoscalingAutoscalingProfileEnumBalanced            ClusterAutoscalingAutoscalingProfileEnum = "BALANCED"
)

type ClusterAutoscaling struct {
	AutoprovisioningLocations        []string                                  `json:"autoprovisioningLocations"`
	AutoprovisioningNodePoolDefaults *AutoprovisioningNodePoolDefaults         `json:"autoprovisioningNodePoolDefaults"`
	AutoscalingProfile               *ClusterAutoscalingAutoscalingProfileEnum `json:"autoscalingProfile"`
	EnableNodeAutoprovisioning       *bool                                     `json:"enableNodeAutoprovisioning"`
	ResourceLimits                   []ResourceLimit                           `json:"resourceLimits"`
}
