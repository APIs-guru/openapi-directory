package shared



type KubernetesClusterConfig struct {
    GkeClusterConfig *GkeClusterConfig `json:"gkeClusterConfig,omitempty"`
    KubernetesNamespace *string `json:"kubernetesNamespace,omitempty"`
    KubernetesSoftwareConfig *KubernetesSoftwareConfig `json:"kubernetesSoftwareConfig,omitempty"`
    
}

