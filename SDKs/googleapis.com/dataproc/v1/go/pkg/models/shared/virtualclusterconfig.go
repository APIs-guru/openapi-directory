package shared

type VirtualClusterConfig struct {
	AuxiliaryServicesConfig *AuxiliaryServicesConfig `json:"auxiliaryServicesConfig"`
	KubernetesClusterConfig *KubernetesClusterConfig `json:"kubernetesClusterConfig"`
	StagingBucket           *string                  `json:"stagingBucket"`
}
