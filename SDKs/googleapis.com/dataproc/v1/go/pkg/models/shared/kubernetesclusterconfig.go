package shared

type KubernetesClusterConfig struct {
	GkeClusterConfig         *GkeClusterConfig         `json:"gkeClusterConfig"`
	KubernetesNamespace      *string                   `json:"kubernetesNamespace"`
	KubernetesSoftwareConfig *KubernetesSoftwareConfig `json:"kubernetesSoftwareConfig"`
}
