package shared

type ClusterAutoscalingAutoscalingProfileEnum string

const (
	ClusterAutoscalingAutoscalingProfileEnumProfileUnspecified  ClusterAutoscalingAutoscalingProfileEnum = "PROFILE_UNSPECIFIED"
	ClusterAutoscalingAutoscalingProfileEnumOptimizeUtilization ClusterAutoscalingAutoscalingProfileEnum = "OPTIMIZE_UTILIZATION"
	ClusterAutoscalingAutoscalingProfileEnumBalanced            ClusterAutoscalingAutoscalingProfileEnum = "BALANCED"
)

// ClusterAutoscaling
// ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs.
type ClusterAutoscaling struct {
	AutoprovisioningLocations        []string                                  `json:"autoprovisioningLocations,omitempty"`
	AutoprovisioningNodePoolDefaults *AutoprovisioningNodePoolDefaults         `json:"autoprovisioningNodePoolDefaults,omitempty"`
	AutoscalingProfile               *ClusterAutoscalingAutoscalingProfileEnum `json:"autoscalingProfile,omitempty"`
	EnableNodeAutoprovisioning       *bool                                     `json:"enableNodeAutoprovisioning,omitempty"`
	ResourceLimits                   []ResourceLimit                           `json:"resourceLimits,omitempty"`
}
