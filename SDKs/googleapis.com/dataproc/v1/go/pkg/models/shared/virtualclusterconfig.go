package shared

// VirtualClusterConfig
// The Dataproc cluster config for a cluster that does not directly control the underlying compute resources, such as a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke).
type VirtualClusterConfig struct {
	AuxiliaryServicesConfig *AuxiliaryServicesConfig `json:"auxiliaryServicesConfig,omitempty"`
	KubernetesClusterConfig *KubernetesClusterConfig `json:"kubernetesClusterConfig,omitempty"`
	StagingBucket           *string                  `json:"stagingBucket,omitempty"`
}
