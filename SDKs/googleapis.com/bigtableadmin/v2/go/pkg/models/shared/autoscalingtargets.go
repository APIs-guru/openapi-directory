package shared

type AutoscalingTargets struct {
	CPUUtilizationPercent        *int32 `json:"cpuUtilizationPercent"`
	StorageUtilizationGibPerNode *int32 `json:"storageUtilizationGibPerNode"`
}
