package shared

// KubernetesClusterConfig
// The configuration for running the Dataproc cluster on Kubernetes.
type KubernetesClusterConfig struct {
	GkeClusterConfig         *GkeClusterConfig         `json:"gkeClusterConfig,omitempty"`
	KubernetesNamespace      *string                   `json:"kubernetesNamespace,omitempty"`
	KubernetesSoftwareConfig *KubernetesSoftwareConfig `json:"kubernetesSoftwareConfig,omitempty"`
}
