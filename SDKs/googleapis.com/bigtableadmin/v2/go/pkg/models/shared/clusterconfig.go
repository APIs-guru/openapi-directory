package shared

// ClusterConfig
// Configuration for a cluster.
type ClusterConfig struct {
	ClusterAutoscalingConfig *ClusterAutoscalingConfig `json:"clusterAutoscalingConfig,omitempty"`
}
