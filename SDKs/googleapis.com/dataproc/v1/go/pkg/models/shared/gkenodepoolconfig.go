package shared

// GkeNodePoolConfig
// The configuration of a GKE node pool used by a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/concepts/jobs/dataproc-gke#create-a-dataproc-on-gke-cluster).
type GkeNodePoolConfig struct {
	Autoscaling *GkeNodePoolAutoscalingConfig `json:"autoscaling,omitempty"`
	Config      *GkeNodeConfig                `json:"config,omitempty"`
	Locations   []string                      `json:"locations,omitempty"`
}
