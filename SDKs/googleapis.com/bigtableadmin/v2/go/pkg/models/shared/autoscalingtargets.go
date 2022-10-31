package shared

type AutoscalingTargets struct {
	CPUUtilizationPercent        *int32 `json:"cpuUtilizationPercent,omitempty"`
	StorageUtilizationGibPerNode *int32 `json:"storageUtilizationGibPerNode,omitempty"`
}
