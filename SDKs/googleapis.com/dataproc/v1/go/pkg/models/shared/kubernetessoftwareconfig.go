package shared

// KubernetesSoftwareConfig
// The software configuration for this Dataproc cluster running on Kubernetes.
type KubernetesSoftwareConfig struct {
	ComponentVersion map[string]string `json:"componentVersion,omitempty"`
	Properties       map[string]string `json:"properties,omitempty"`
}
