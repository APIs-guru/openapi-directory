package shared



type VirtualClusterConfig struct {
    AuxiliaryServicesConfig *AuxiliaryServicesConfig `json:"auxiliaryServicesConfig,omitempty"`
    KubernetesClusterConfig *KubernetesClusterConfig `json:"kubernetesClusterConfig,omitempty"`
    StagingBucket *string `json:"stagingBucket,omitempty"`
    
}

