package shared

// ClusterSelector
// A selector that chooses target cluster for jobs based on metadata.
type ClusterSelector struct {
	ClusterLabels map[string]string `json:"clusterLabels,omitempty"`
	Zone          *string           `json:"zone,omitempty"`
}
