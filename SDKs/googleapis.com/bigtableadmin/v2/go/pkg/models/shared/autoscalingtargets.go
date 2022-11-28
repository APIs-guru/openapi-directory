package shared

// AutoscalingTargets
// The Autoscaling targets for a Cluster. These determine the recommended nodes.
type AutoscalingTargets struct {
	CPUUtilizationPercent        *int32 `json:"cpuUtilizationPercent,omitempty"`
	StorageUtilizationGibPerNode *int32 `json:"storageUtilizationGibPerNode,omitempty"`
}
